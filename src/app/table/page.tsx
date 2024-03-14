"use client";

import GridTable from "@/components/Table/GridTable/GridTable";

import AvatarComponent from "@/components/Table/components/AvatarGroup/AvatarGroup";
import Progressbar from "@/components/Table/components/Progress/Progress";
import { handlePageChanges } from "@/components/Table/utils/utils";
import { projectList } from "@/utils/dummyData";

import React, { useEffect, useState } from "react";

const Projects = () => {
  const dataAccessor = {
    table: [
      //   {
      //     accessor: "id",
      //     title: "Id",
      //   },
      {
        accessor: "title",
        title: "Title",
        sortable: true,
        options: {
          position: "center",
        },
        render: (row: any) => (
          <>
            {/* <CardHeaderWrapper $isListViewBorderPadding="isBorderPadding">
              <CardHeader>
                <CardLeftArea>
                  <Image src={row.image} alt="" width={1000} height={1000}></Image>
                </CardLeftArea>
                <div>
                  <CardHeaderTitle>{row.title}</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    <CardPosition>
                      <span className="position_1">{row?.projectName}</span>
                      <span className="position_2"> </span>
                    </CardPosition>
                    <CardFollowing>
                      <Image src="/assets/projects/timer.svg" width={1000} height={1000} alt="" />
                      {row?.status}
                    </CardFollowing>
                  </CardHeaderSubtitle>
                </div>
              </CardHeader>
            </CardHeaderWrapper> */}
          </>
        ),
      },
      {
        accessor: "timeline",
        title: "Timeline",
        sortable: true,
        options: {
          position: "end",
        },
      },
      {
        accessor: "teams",
        title: "Project Teams",
        options: {
          position: "start",
        },
        render: (row: any) => <AvatarComponent projectImageData={row?.teams} />,
      },
      {
        accessor: "type",
        title: "Project Type",
        options: {
          position: "start",
        },
      },
      {
        accessor: "progress",
        title: "Progress",
        sortable: true,
        options: {
          position: "end",
        },
        render: (data: any) => (
          <div
            style={{
              width: "100%",
              textAlign: "left",
            }}>
            <span
              style={
                {
                  // textAlign: "center",
                }
              }>
              Progress
            </span>
            <Progressbar progress={data?.progress} />
          </div>
        ),
      },
      {
        accessor: "actions",
        title: "Actions",
        render: (data: any) => (
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}></div>
        ),
      },
    ],
    card: {
      header: {
        title: "title",
        subtitle: ({ projectName, status }: any) => (
          <p style={{ fontSize: "14px" }}>
            {projectName} | {status}
          </p>
        ),
        image: "image",
      },
      body: [
        {
          title: "Timeline",
          content: "timeline",
        },
        {
          title: "Teams",
          content: ({ teams }: any) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AvatarComponent projectImageData={teams} />
            </div>
          ),
        },
        {
          title: "Project Type",
          content: "type",
        },
        {
          title: "Progress",
          content: ({ progress }: any) => <Progressbar progress={progress} />,
        },
      ],
      action: {
        options: {
          position: "top",
        },
        render: (data: any) => (
          <>
            <button onClick={() => console.log(data, "selected data")}>
              View
            </button>
            <button>Edit</button>
            <button>Remove</button>
          </>
        ),
      },
    },
  };

  const [limits, setLimits] = useState<number>(9);
  const [newData, setNewData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const totalPage = Math.ceil(projectList?.length / limits);
  // projectList set in the front end pagination and show the projectList
  useEffect(() => {
    let newDataArray: any = [];
    for (let i = (page - 1) * limits; i < page * limits; i++) {
      if (projectList[i]) {
        newDataArray.push(projectList[i]);
      }
    }
    setNewData(newDataArray);
  }, [limits, page]);

  const handlePageChange = (pageNumber: number | string) => {
    handlePageChanges(page, totalPage, pageNumber, setPage);
  };
  const handleRowShowValue = (e: any) => {
    setLimits(e);
  };

  const renderHeader = () => {
    return (
      <></>
      //   <GridTableLeftWrapper>
      //     <div
      //       style={{
      //         width: '100%'
      //       }}
      //     >
      //       <GridTableTextWrapperTitle>Project List</GridTableTextWrapperTitle>
      //       <GridTableTextWrapperSubtitle>
      //         The Project List compiles critical tasks, orchestrating a seamless project management.
      //       </GridTableTextWrapperSubtitle>
      //     </div>
      //     <GridTableSearchArea>
      //       <GridTableSearchField type="search" placeholder="search" />
      //       <GridTableAllButton>
      //         <Image src="/assets/icons/plus.svg" width={20} height={20} alt="" />
      //         <span> Add New</span>
      //       </GridTableAllButton>
      //     </GridTableSearchArea>
      //   </GridTableLeftWrapper>
    );
  };

  return (
    <div style={{ padding: "15px" }}>
      <GridTable
        data={newData} // rowdata of the table
        dataAccessor={dataAccessor} // data accessor of the table
        handlePageChange={handlePageChange}
        page={page} // page number
        limits={limits} // limits of data
        totalPage={totalPage} // total page number
        handleRowShowValue={handleRowShowValue} // handle row show value function
        showSelectBox={true} // selectbox showing or not
        isGridList={true} // header showing or not
        renderHeader={renderHeader} // render header function
        isPagination={true} // pagination showing or not
      />
    </div>
  );
};

export default Projects;
