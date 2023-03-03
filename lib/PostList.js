import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import useOrderCoundHook from "../lib/useOrderCount";
import useDataTableHook from  "../lib/useDatatable";

// const host = 'http://192.168.3.131:8081';
const host = "http://localhost:8081";

const PostList = () => {
  const orderHook = useOrderCoundHook();
  const DbTable = useDataTableHook();
  //const [Posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState("ID");
  const [sortDirection, setsortDirection] = useState("desc");

  const fetchUsers = async (page) => {
    setLoading(true);
    //https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1
    // `${host}/posts?page=${page}&per_page=${perPage}&delay=1`
    const response = await axios.get(
      `${host}/posts?page=${page}&per_page=${perPage}&sort=${sort}&order=${sortDirection}&delay=1`
    );
    setData(response.data.posts);
    setTotalRows(response.data.totalItems);
    setLoading(false);
  };
  // Move to custom hooks
 /*  const handleEditClick = (d) => {
    console.log('Edit', d);    
  }; */
  // Move to custom hooks
 /*  const handleDeleteClick = (d) => {
    console.log("delete", d);
  }; */
// Move to custom hooks
  const handlePageChange = (page) => { console.log(page)
    fetchUsers(page);
  }; 
  //const TablePagination = DbTable.handlePageChange(host,1);
  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    // `https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`
    const response = await axios.get(
      `${host}/posts?page=${page}&per_page=${newPerPage}&sort=${sort}&order=${sortDirection}&delay=1`
    );
    setData(response.data.posts);
    setPerPage(newPerPage);
    setLoading(false);
  };

  const handleSort = async (column, sortDirection, perPage) => {
    setLoading(true);
    console.log(perPage.length);
    //console.log(sortDirection)
    /// reach out to some API and get new data using or sortField and sortDirection
    // e.g. https://api.github.com/search/repositories?q=blog&sort=${column.sortField}&order=${sortDirection}
    const response = await axios.get(
      `${host}/posts?page=1&per_page=${perPage.length}&sort=${column.sortField}&order=${sortDirection}&delay=1`
    );
    setData(response.data.posts);
    setPerPage(sortDirection);
    setSort(column.sortField);
    setsortDirection(sortDirection);
    setLoading(false);
  };
  const handleFilter = (filters) => {
    // simulate server sort
    setLoading(true);
  };
  useEffect(() => {  
    fetchUsers('1');
  }, []);


  const columns = [
    {
      name: "ID",
      // id:(row)=>row.ID.toString(),
      selector: (row) => row.ID,
      sortField: "ID",
      sortable: true,
    },
    {
      name: "Post Title",
      selector: (row) => row.PostTitle,
      sortField: "PostTitle",
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.CreationDate,
      sortField: "CreationDate",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => [
        <div key={row.ID}>
          <button onClick={() => DbTable.handleEditClick(row.ID)}>Edit</button>,
          <button onClick={() => DbTable.handleDeleteClick(row.ID)}>Delete</button>{" "}
        </div>,
      ],
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const paginationOptions = {
    rowsPerPageText: "Row per page",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Show All",
  };

  return (
    <>
    <div className="container">
      
      <Link to="/add" className="btn btn-primary pull-right">
        Add New-{orderHook.orderCount.count}
      </Link>
      
      <div className="row">
        <DataTable
          title="Post List"
          // defaultSortFieldId={1}
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationOptions}
          selectableRowsVisibleOnly
          progressPending={loading}
          paginationServer
          paginationTotalRows={totalRows}
          selectableRows
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          onSort={handleSort}
          onFilter={handleFilter}
        />
      </div>
    </div>
    </>
  );
};
export default PostList;
/* {/* Posts.map((post, index) => (
            <tr key={post.ID}>
              <td>{index + 1}</td>
              <td>{post.PostTitle}</td>
              <td>
                {new Date(post.CreationDate)
                  .toISOString()
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </td>
              <td>
                <Link
                  to={`/edit/${post.ID}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                  <button onClick={ () => deletepost(post.id) } className="button is-small is-danger">Delete</button> 
              </td>
            </tr>
          ))} */

// https://jbetancur.github.io/react-data-table-component/?path=/story/getting-started-kitchen-sink--kitchen-sink&globals=outline:true;backgrounds.grid:true
// https://anothercodeartist.github.io/react-data-table-component/?path=/docs/sorting-remote-sort--remote-sort
// https://www.pragimtech.com/blog/reactjs/routing-part-3-in-react/
