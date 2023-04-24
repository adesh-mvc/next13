"use client";
import React, { useEffect } from "react";

export default function TableFooter(props) {
    var pagePagination = {
        code: '',
        Extend: function (data) {
            data = data || {};
            pagePagination.size = data.size || 300;
            pagePagination.page = data.page || 1;
            pagePagination.step = data.step || 3;
        },
        Add: function (p, q) {

            for (var l = p; l < q; l++) {
                pagePagination.code += `<li  class="paginate_button page-item">
                <a
                    
                    aria-controls="kt_ecommerce_products_table"
                    data-page=""
                    data-dt-idx=""
                    tabIndex=${l}
                  
                    class="page-link"
                >
                   ${l}
                </a>
            </li>`;
            }

        },
        Last: function () {
            pagePagination.code += `<li  class="paginate_button page-item">
            <a
                
                aria-controls="kt_ecommerce_products_table"
                data-page=""
                data-dt-idx=""
              
              
                class="page-link"
            >
            ...
            </a>
        </li>
        <li  class="paginate_button page-item">
            <a
                
                aria-controls="kt_ecommerce_products_table"
                data-page=""
                data-dt-idx=""
              
              
                class="page-link"
            >
           ${pagePagination.size}
            </a>
        </li>
        
        `;
        },
        First: function () {
            pagePagination.code += `<li  class="paginate_button page-item">
            <a
                
                aria-controls="kt_ecommerce_products_table"
                data-page=""
                data-dt-idx=""
              
              
                class="page-link"
            >
            ...
            </a>
        </li>`;
        },
        Click: function () {
            pagePagination.page = +this.innerHTML;
            pagePagination.Start();
        },
        Prev: function () {
            pagePagination.page--;
            if (pagePagination.page < 1) {
                pagePagination.page = 1;
            }
            pagePagination.Start();
        },
        Next: function () {
            pagePagination.page++;
            if (pagePagination.page > pagePagination.size) {
                pagePagination.page = pagePagination.size;
            }
            pagePagination.Start();
        },
        Bind: function () {
            var a = pagePagination.e.getElementsByTagName('a');

            for (var num = 0; num < a.length; num++) {
                if (+a[num].innerHTML === pagePagination.page)
                    a[num].parentElement.classList.add('active');
                a[num].addEventListener('click', pagePagination.Click, false);
            }
        },
        Finish: function () {
            pagePagination.e.innerHTML = pagePagination.code;
            pagePagination.code = '';
            pagePagination.Bind();
        },
        Start: function () {
            if (pagePagination.size < pagePagination.step * 2 + 6) {
                pagePagination.Add(1, pagePagination.size + 1);
            } else if (pagePagination.page < pagePagination.step * 2 + 1) {
                pagePagination.Add(1, pagePagination.step * 2 + 4);
                pagePagination.Last();
            } else if (pagePagination.page > pagePagination.size - pagePagination.step * 2) {
                pagePagination.First();
                pagePagination.Add(pagePagination.size - pagePagination.step * 2 - 2,
                    pagePagination.size + 1);
            } else {
                pagePagination.First();
                pagePagination.Add(pagePagination.page - pagePagination.step,
                    pagePagination.page + pagePagination.step + 1);
                pagePagination.Last();
            }
            pagePagination.Finish();
        },
        Buttons: function (e) {
            var nav = e.getElementsByTagName('a');
            nav[0].addEventListener('click', pagePagination.Prev, false);
            nav[1].addEventListener('click', pagePagination.Next, false);
        },
        Create: function (e) {
            var html = [`<li
            class="paginate_button page-item previous "
            id="kt_ecommerce_products_table_previous"
        >
            <a
               
                aria-controls="kt_ecommerce_products_table"
                data-dt-idx=${0}
                tabIndex=${0}
                class="page-link"
            >
                <i class="previous" />
            </a>
        </li>`, // previous button
                `<ul class="pagination">
                 
                 
                 </ul>`, // paginationID container
                `<li
                class="paginate_button page-item next"
                id="kt_ecommerce_products_table_next"
            >
                <a
                    
                    aria-controls="kt_ecommerce_products_table"
                    data-dt-idx=""
                    tabIndex="0"
                    class="page-link"
                >
                    <i class="next" />
                </a>
            </li>` // next button
            ];
            e.innerHTML = html.join('');
            pagePagination.e = e.getElementsByTagName('ul')[0];
            console.log("TableFooter:", e)
            pagePagination.Buttons(e);
        },
        Init: function (e, data) {
            const ul = e.childNodes[1];
            // console.log("INIT pagination:", ul.insertAdjacentHTML('afterbegin', e.childNodes[0]));
            pagePagination.Extend(data);
            pagePagination.Create(e);
            pagePagination.Start();
        }
    };

    useEffect(() => {
        // document.addEventListener('DOMContentLoaded', init, false);
        // pagePagination.Init(document.getElementById('kt_ecommerce_products_table_paginate'), props.pagination);
    })

    return (
        <div className="row">
            <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                <div
                    className="dataTables_length"
                    id="kt_ecommerce_products_table_length"
                >
                    <label>
                        <select
                            name="kt_ecommerce_products_table_length"
                            aria-controls="kt_ecommerce_products_table"
                            className="form-select form-select-sm form-select-solid"
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="kt_ecommerce_products_table_paginate"
                >
                    <ul className="pagination">
                        <li
                            className="paginate_button page-item previous "
                            id="kt_ecommerce_products_table_previous"
                        >
                            <a
                                href={void (0)}
                                aria-controls="kt_ecommerce_products_table"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                            >
                                <i className="previous" />
                            </a>
                        </li>
                        {(() => {
                            // {`/admin/products/list/${i + 1}`}
                            const totalpage = props.pageCount;
                            const rows = [];
                            for (let i = 0; i < totalpage; i++) {

                                rows.push(
                                    <li key={i + 1} className={`paginate_button page-item ${!i ? `active` : ''}`}>
                                        <a
                                            href={void (0)}
                                            aria-controls="kt_ecommerce_products_table"
                                            data-page={i + 1}
                                            data-dt-idx={1}
                                            tabIndex={i}
                                            onClick={props.pagination}
                                            className="page-link"
                                        >
                                            {i + 1}
                                        </a>
                                    </li>

                                );
                                // }
                                /*  if (i >= 3 && i < 5) {
                                     rows.push(<li className={`page-item`}>...</li>)
                                 } */

                            }
                            return rows;
                        })()}


                        <li
                            className="paginate_button page-item next"
                            id="kt_ecommerce_products_table_next"
                        >
                            <a
                                href={void (0)}
                                aria-controls="kt_ecommerce_products_table"
                                data-dt-idx={6}
                                tabIndex={0}
                                className="page-link"
                            >
                                <i className="next" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>


        </div>
    )
}