'use client';
import React, { useEffect, useState } from 'react';

import {
  Table,
  TableBody,
  TableCheckbox,
  TableComponentWrapper,
  TableData,
  TableDataLast,
  TableDataNone,
  TableHead,
  TableHeader,
  TableHeaderFirst,
  TableHeaderLast,
  TableHeaderNone,
  TableRow
} from './StyleComponent';
import SVGmodifier from '@/components/SVG_modifier/SVGmodifier';
const TableComponent = ({
  columns = [],
  records = [],
  onToggleItem = () => {},
  showSelectBox = false,
  tableHeaderShow = true,
  defaultRowRender
}: any) => {
  const [toggleItem, setToggleItem] = useState<any>([]);
  const [tableAllData, setTableAllData] = useState<any>(records);
  useEffect(() => {
    setTableAllData(records);
  }, [records]);
  // select box function code here for all data
  const handleAllDataSelectedRecords = (e: any) => {
    if (e === 'all') {
      if (toggleItem.length === records.length) {
        setToggleItem([]);
      } else {
        setToggleItem(records);
      }
    } else {
      if (toggleItem.some((item: any) => item.id === e.id)) {
        setToggleItem(toggleItem.filter((item: any) => item.id !== e.id));
      } else {
        setToggleItem([...toggleItem, e]);
      }
    }
  };
  useEffect(() => {
    onToggleItem && onToggleItem(toggleItem);
  }, [onToggleItem, toggleItem]);
  const initialSortConfig = columns.reduce((acc: any, column: any) => {
    if (column?.sortable) {
      acc[column?.accessor] = { key: column?.accessor, direction: 'asc' };
    }
    return acc;
  }, {});
  const [sortConfig, setSortConfig] = useState(initialSortConfig);
  const handleSort = (key: string) => {
    const direction = sortConfig[key].direction === 'asc' ? 'desc' : 'asc';
    const newSortConfig = { ...sortConfig, [key]: { key, direction } };

    const resultData =
      tableAllData?.length &&
      [...tableAllData]?.sort((a: any, b: any) => {
        if (direction === 'asc') {
          return a[key] > b[key] ? 1 : -1;
        } else if (direction === 'desc') {
          return a[key] < b[key] ? 1 : -1;
        }
        return 0;
      });
    setTableAllData(resultData);
    setSortConfig(newSortConfig);
  };
  return (
    <TableComponentWrapper style={{ overflow: 'auto' }}>
      {tableAllData?.length && columns?.length > 0 ? (
        <Table>
          {/*  table header area  */}
          {tableHeaderShow && (
            <TableHeader>
              <TableRow>
                {showSelectBox && (
                  <TableHead>
                    {' '}
                    {/* header select box code here */}
                    <div
                      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <TableCheckbox
                        type="checkbox"
                        checked={toggleItem.length === records.length}
                        onChange={() => {
                          handleAllDataSelectedRecords('all');
                        }}
                      />
                    </div>
                  </TableHead>
                )}
                {
                  // ?! table header code here
                  columns.map((header: any, index: any) => (
                    <TableHead key={index}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {header?.title}
                        {/* sorting for their key code here  */}
                        {header?.sortable && (
                          <span
                            style={{
                              cursor: header?.sortable ? 'pointer' : ''
                            }}
                          >
                            {sortConfig[header.accessor]?.key === header.accessor && (
                              <span>
                                {sortConfig[header.accessor]?.direction === 'asc' ? (
                                  <span onClick={() => handleSort(header?.accessor)}>
                                    <SVGmodifier
                                      svg={'assets/icons/arrow_up.svg'}
                                      height={20}
                                      width={20}
                                    />
                                  </span>
                                ) : (
                                  <span onClick={() => handleSort(header?.accessor)}>
                                    <SVGmodifier
                                      svg={'assets/icons/arrow_down.svg'}
                                      height={20}
                                      width={20}
                                    />
                                  </span>
                                )}
                              </span>
                            )}
                          </span>
                        )}
                      </div>
                    </TableHead>
                  ))
                }
              </TableRow>
            </TableHeader>
          )}
          {/* table body area code here  */}
          <TableBody>
            {tableAllData.map((data: any, index: any) => {
              return (
                <TableRow
                  key={index}
                  onClick={() => {
                    defaultRowRender && defaultRowRender(data);
                  }}
                  $isOnclickRow={defaultRowRender ? 'click' : ''}
                >
                  {tableHeaderShow && showSelectBox && (
                    <TableData className="checkbox_center">
                      {/*  select box code here */}
                      <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                      >
                        <TableCheckbox
                          type="checkbox"
                          checked={toggleItem.some((item: any) => item.id === data.id)}
                          onChange={() => handleAllDataSelectedRecords(data)}
                        />
                      </div>
                    </TableData>
                  )}
                  {columns.map((header: any, index: any) => (
                    <TableData key={index}>
                      {/* is data exist then it show in ui other you need to render it  */}
                      {header?.render
                        ? header?.render(data)
                        : getDynamicValue(data, header?.accessor)}
                    </TableData>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        // ?! no data found code here
        <TableDataNone>
          <TableHeaderNone>
            <TableHeaderFirst>Column-1</TableHeaderFirst>
            <TableHeaderLast>Column-2</TableHeaderLast>
          </TableHeaderNone>
          <TableDataLast>No Data Found</TableDataLast>
        </TableDataNone>
      )}
    </TableComponentWrapper>
  );
};

export default TableComponent;

const getDynamicValue = (obj: any, keys: string) => {
  const keysArray = keys.split('.');
  return keysArray.reduce(
    (value, key) => (value && value[key] !== undefined ? value[key] : undefined),
    obj
  );
};
