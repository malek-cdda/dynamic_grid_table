import React, { useEffect, useState } from "react";

type SVGmodifierProps = {
  svg: string | React.ReactElement;
  stroke?: string;
  fill?: string;
  width?: string | number;
  height?: string | number;
};

const SVGmodifier = ({
  svg,
  stroke,
  fill,
  width,
  height,
}: SVGmodifierProps) => {
  if (typeof svg === "string") {
    return (
      <StringSVG
        svg={svg}
        stroke={stroke}
        fill={fill}
        width={width}
        height={height}
      />
    );
  }

  return (
    <SVGComponent
      svg={svg}
      stroke={stroke}
      fill={fill}
      width={width}
      height={height}
    />
  );
};

export default SVGmodifier;

// This component will change the stroke color of the SVG file which is located in the public folder
const StringSVG = ({ svg, stroke, fill, width, height }: SVGmodifierProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        let svgUrl = "";
        if (typeof svg === "string") {
          svgUrl = svg;
        } else {
          throw new Error("Invalid SVG prop");
        }

        const response = await fetch(svgUrl, { mode: "no-cors" });
        if (!response.ok) {
          throw new Error("Failed to fetch SVG");
        }

        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };

    fetchSvg();
  }, [svg]);

  if (!svgContent) {
    // Render loading state or placeholder
    return null;
  }

  // Parse SVG and get root element
  const svgDOM = new DOMParser().parseFromString(svgContent, "text/xml");
  const svgEl = svgDOM.childNodes[0] as Element;

  if (svgEl.tagName !== "svg") {
    return null;
  }

  // Update root props only
  if (width) svgEl.setAttribute("width", String(width));
  if (height) svgEl.setAttribute("height", String(height));

  // Update children stroke recursively
  if (stroke) {
    svgEl.childNodes.forEach((child) => {
      if (child instanceof Element) {
        updateStrokeColorRecursively(child, stroke);
      }
    });
  }

  // update the fill color
  if (fill) {
    svgEl.childNodes.forEach((child) => {
      if (child instanceof Element) {
        child.setAttribute("fill", fill);
      }
    });
  }

  // Serialize to string
  const updatedSVGString = new XMLSerializer().serializeToString(svgEl);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      dangerouslySetInnerHTML={{ __html: updatedSVGString }}
    />
  );
};

// Update stroke color recursively
const updateStrokeColorRecursively = (element: Element, stroke: string) => {
  if (element.tagName === "path") {
    element.setAttribute("stroke", stroke);
  }

  if (element.children) {
    Array.from(element.children).forEach((child) => {
      updateStrokeColorRecursively(child, stroke);
    });
  }
};

// This component will change the stroke color of the SVG file like <svg>...</svg>
const SVGComponent: React.FC<SVGmodifierProps> = ({
  svg,
  stroke,
  fill = "none",
  width,
  height,
}) => {
  const updatedSvg = React.cloneElement(
    svg as React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    {
      width:
        width ||
        (
          svg as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >
        ).props.width,
      height:
        height ||
        (
          svg as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >
        ).props.height,
      fill,
      children: React.Children.map(
        (
          svg as React.ReactElement<
            any,
            string | React.JSXElementConstructor<any>
          >
        ).props.children,
        (child) => {
          if (React.isValidElement(child)) {
            return convertToReactElement(child, stroke);
          }
          return child;
        }
      ),
    }
  );

  return updatedSvg;
};

// Convert to React element
const convertToReactElement: any = (element: any, stroke: any) => {
  const { style, children, ...rest } = element.props;

  const attrs: any = {};
  Object.keys(rest).forEach((key) => {
    const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    attrs[camelKey] = rest[key];
  });

  const props = {
    style: {
      ...style,
      stroke,
    },
    children: React.Children.map(children, (child) => {
      return React.isValidElement(child)
        ? convertToReactElement(child, stroke)
        : child;
    }),
  };

  return React.createElement(element.type, { ...attrs, ...props });
};
