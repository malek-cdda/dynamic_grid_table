import React from "react";
import {
  PaginationArrowButton,
  PaginationButton,
  PaginationContainer,
  PaginationText,
  PaginationWrapper,
} from "./StyledComponent";
import { returnPagination } from "./returnPagination";
import Image from "next/image";
import SVGmodifier from "../SVGmodifier/SVGmodifier";

interface PaginationProps {
  totalPage: number;
  page: number | string;
  limits: number;
  siblings: any;
  handlePageChange: (page: number | string) => void;
}
const Pagination = ({
  totalPage,
  page,
  limits,
  siblings,
  handlePageChange,
}: PaginationProps) => {
  const arr = returnPagination(totalPage, page, limits, siblings);
  return (
    <PaginationWrapper>
      <PaginationText>Pages 1 to 10</PaginationText>
      <PaginationContainer>
        <PaginationArrowButton onClick={() => handlePageChange("prev")}>
          {" "}
          {/* <Image src="/assets/left_arrow.svg" width={24} height={24} alt="" /> */}
          <SVGmodifier
            svg={"/assets/icons/left.svg"}
            width={17}
            height={17}
            stroke="white"
          />
        </PaginationArrowButton>
        {arr.map((item: any, index: any) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(item)}
            $isActive={index + 1 === page ? "active" : "inactive"}>
            {" "}
            {item}{" "}
          </PaginationButton>
        ))}
        <PaginationArrowButton onClick={() => handlePageChange("next")}>
          {" "}
          <SVGmodifier
            svg={"/assets/icons/right.svg"}
            width={17}
            height={17}
            stroke="white"
          />
        </PaginationArrowButton>
      </PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
