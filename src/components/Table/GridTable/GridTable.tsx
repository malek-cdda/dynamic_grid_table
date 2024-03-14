import React, { useEffect, useState } from 'react';
import CardComponent from '../Card/Card';
import TableComponent from '../Table/Table';
import Pagination from '../components/Pagination/Pagination';
import SelectBtn from '../components/SelectArea/Select';
import {
  GridContainer,
  GridTableAllButton,
  GridTableLeftWrapper,
  GridTableSearchField,
  GridTableTextWrapperSubtitle,
  GridTableTextWrapperTitle,
  GridTableViewButton,
  GridTableViewWrapperArea,
  GridTableWrapper,
  GridTableWrapperArea
} from './styledComponents';

import Image from 'next/image';
import SVGmodifier from '@/components/SVG_modifier/SVGmodifier';

const GridTable = ({
  data = [],
  dataAccessor,

  // handleShowActionBtn,
  // showActionBtn,
  page,
  handlePageChange,
  limits,
  totalPage,
  handleRowShowValue,
  showSelectBox,
  tableHeaderShow,
  onToggleItem,
  defaultRowRender,
  isGridList = false,
  renderHeader,
  isPagination = false,
  getSortingData
}: // isGrid = false,
any) => {
  const [isGrid, setIsGrid] = React.useState(false); // logic for grid and list view
  let cardObject: any;
  let columns = dataAccessor;
  if (dataAccessor?.length >= 0) {
    columns = dataAccessor;
  } else if (typeof dataAccessor === 'object') {
    cardObject = dataAccessor?.card;
    columns = dataAccessor?.table;
  }
  const [showActionBtn, setShowActionBtn] = useState<any>(null);
  const handleShowActionBtn = (id: any) => {
    if (showActionBtn === id) {
      setShowActionBtn(null);
    } else {
      setShowActionBtn(id);
    }
  };

  return (
    <GridTableWrapperArea>
      <GridTableWrapper>
        {/* gridview and list view header area  */}
        {!renderHeader && <div> {renderHeader && renderHeader()}</div>}
        {renderHeader && renderHeader()}
        {isGridList && (
          <GridTableViewWrapperArea>
            <GridTableViewButton
              $activeColor={!isGrid ? 'activeColorValue' : ''}
              onClick={() => setIsGrid(false)}
            >
              <SVGmodifier svg="/assets/icons/list.svg" width={23} height={23} />
              <span> List View</span>
            </GridTableViewButton>
            <GridTableViewButton
              $activeColor={isGrid ? 'activeColorValue' : ''}
              onClick={() => setIsGrid(true)}
            >
              <SVGmodifier svg="/assets/icons/grid.svg" width={23} height={23} stroke="white" />
              <span>Grid View</span>
            </GridTableViewButton>
          </GridTableViewWrapperArea>
        )}
      </GridTableWrapper>
      {/* card showing code here  */}
      {isGrid ? (
        <GridContainer>
          {data.map((project: any, index: any) => {
            return (
              <CardComponent
                key={index}
                project={project}
                cardObject={cardObject}
                handleShowActionBtn={handleShowActionBtn}
                showActionBtn={showActionBtn}
              />
            );
          })}
        </GridContainer>
      ) : (
        // table showing code here
        <TableComponent
          records={data}
          columns={columns}
          showSelectBox={showSelectBox}
          tableHeaderShow={tableHeaderShow}
          onToggleItem={onToggleItem}
          defaultRowRender={defaultRowRender}
          getSortingData={getSortingData}
        />
      )}
      {/* pagination component and select component area here  */}
      {isPagination && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px ',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px'
          }}
        >
          {' '}
          <div>
            {/* select value for showing data in row table  */}
            <SelectBtn handleRowShowValue={handleRowShowValue} limits={limits} />
          </div>
          <div>
            {/* pagination component */}
            <Pagination
              totalPage={totalPage}
              page={page}
              limits={limits}
              siblings={1}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </GridTableWrapperArea>
  );
};

export default GridTable;
