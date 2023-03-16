"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google';

/* import FullCalender from './component/FullCalender';
import Modals from './component/AdminModal'; */

const inter = Inter({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] })
const initMixedWidget2 = function () {

  var charts = document.querySelectorAll('.mixed-widget-2-chart');

  var color;
  var strokeColor;
  var height;
  var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
  var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
  var options;
  var chart;

  [].slice.call(charts).map(function (element) {
    height = parseInt(KTUtil.css(element, 'height'));
    color = KTUtil.getCssVariableValue('--bs-' + element.getAttribute("data-kt-color"));
    strokeColor = KTUtil.colorDarken(color, 15);

    options = {
      series: [{
        name: 'Net Profit',
        data: [30, 45, 32, 70, 40, 40, 40]
      }],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: strokeColor,
          opacity: 0.5
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 0
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [strokeColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: borderColor,
            width: 1,
            dashArray: 3
          }
        }
      },
      yaxis: {
        min: 0,
        max: 80,
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands"
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['transparent'],
      markers: {
        colors: [color],
        strokeColor: [strokeColor],
        strokeWidth: 3
      }
    };

    chart = new ApexCharts(element, options);
    chart.render();
  });
}
const initMixedWidget6 = function () {
  var charts = document.querySelectorAll('.mixed-widget-6-chart');

  [].slice.call(charts).map(function (element) {
    var height = parseInt(KTUtil.css(element, 'height'));

    if (!element) {
      return;
    }

    var color = element.getAttribute('data-kt-chart-color');

    var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
    var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
    var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
    var lightColor = KTUtil.getCssVariableValue('--bs-' + color + '-light');

    var options = {
      series: [{
        name: 'Net Profit',
        data: [30, 25, 45, 30, 55, 55]
      }],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: height,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {},
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [baseColor]
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        },
        crosshairs: {
          show: false,
          position: 'front',
          stroke: {
            color: strokeColor,
            width: 1,
            dashArray: 3
          }
        },
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: labelColor,
            fontSize: '12px'
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        hover: {
          filter: {
            type: 'none',
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0
          }
        }
      },
      tooltip: {
        style: {
          fontSize: '12px'
        },
        y: {
          formatter: function (val) {
            return "$" + val + " thousands"
          }
        }
      },
      colors: [lightColor],
      markers: {
        colors: [lightColor],
        strokeColor: [baseColor],
        strokeWidth: 3
      }
    };

    var chart = new ApexCharts(element, options);
    chart.render();
  });
}
export function StatisticsChart() {
  return (
    <> {/*begin::Col*/}
      <div className="col-xl-4 mb-xl-10">
        {/*begin::Mixed Widget 2*/}
        <div className="card h-xl-100">
          {/*begin::Header*/}
          <div className="card-header border-0 bg-primary py-5">
            <h3 className="card-title fw-bold text-white">
              Sales Statistics
            </h3>
            <div className="card-toolbar">
              {/*begin::Menu*/}
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                <span className="svg-icon svg-icon-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect
                        x={5}
                        y={5}
                        width={5}
                        height={5}
                        rx={1}
                        fill="currentColor"
                      />
                      <rect
                        x={14}
                        y={5}
                        width={5}
                        height={5}
                        rx={1}
                        fill="currentColor"
                        opacity="0.3"
                      />
                      <rect
                        x={5}
                        y={14}
                        width={5}
                        height={5}
                        rx={1}
                        fill="currentColor"
                        opacity="0.3"
                      />
                      <rect
                        x={14}
                        y={14}
                        width={5}
                        height={5}
                        rx={1}
                        fill="currentColor"
                        opacity="0.3"
                      />
                    </g>
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
              {/*begin::Menu 3*/}
              <div
                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                data-kt-menu="true"
              >
                {/*begin::Heading*/}
                <div className="menu-item px-3">
                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                    Payments
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Create Invoice
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link flex-stack px-3">
                    Create Payment
                    <i
                      className="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Specify a target name for future usage and reference"
                    />
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Generate Bill
                  </a>
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div
                  className="menu-item px-3"
                  data-kt-menu-trigger="hover"
                  data-kt-menu-placement="right-end"
                >
                  <a href="#" className="menu-link px-3">
                    <span className="menu-title">Subscription</span>
                    <span className="menu-arrow" />
                  </a>
                  {/*begin::Menu sub*/}
                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Plans
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Billing
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <a href="#" className="menu-link px-3">
                        Statements
                      </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2" />
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                      <div className="menu-content px-3">
                        {/*begin::Switch*/}
                        <label className="form-check form-switch form-check-custom form-check-solid">
                          {/*begin::Input*/}
                          <input
                            className="form-check-input w-30px h-20px"
                            type="checkbox"
                            defaultValue={1}
                            defaultChecked="checked"
                            name="notifications"
                          />
                          {/*end::Input*/}
                          {/*end::Label*/}
                          <span className="form-check-label text-muted fs-6">
                            Recuring
                          </span>
                          {/*end::Label*/}
                        </label>
                        {/*end::Switch*/}
                      </div>
                    </div>
                    {/*end::Menu item*/}
                  </div>
                  {/*end::Menu sub*/}
                </div>
                {/*end::Menu item*/}
                {/*begin::Menu item*/}
                <div className="menu-item px-3 my-1">
                  <a href="#" className="menu-link px-3">
                    Settings
                  </a>
                </div>
                {/*end::Menu item*/}
              </div>
              {/*end::Menu 3*/}
              {/*end::Menu*/}
            </div>
          </div>
          {/*end::Header*/}
          {/*begin::Body*/}
          <div className="card-body p-0">
            {/*begin::Chart*/}
            <div className="mixed-widget-2-chart card-rounded-bottom bg-primary"
              data-kt-color="primary"
              style={{ height: 200 }}>{ }</div>
            {/*end::Chart*/}
            {/*begin::Stats*/}
            <div className="card-p mt-n20 position-relative">
              {/*begin::Row*/}
              <div className="row g-0">
                {/*begin::Col*/}
                <div className="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={8}
                        y={9}
                        width={3}
                        height={10}
                        rx="1.5"
                        fill="currentColor"
                      />
                      <rect
                        opacity="0.5"
                        x={13}
                        y={5}
                        width={3}
                        height={14}
                        rx="1.5"
                        fill="currentColor"
                      />
                      <rect
                        x={18}
                        y={11}
                        width={3}
                        height={8}
                        rx="1.5"
                        fill="currentColor"
                      />
                      <rect
                        x={3}
                        y={13}
                        width={3}
                        height={6}
                        rx="1.5"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}{" "}
                  <a href="#" className="text-warning fw-semibold fs-6">
                    Weekly Sales
                  </a>
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col bg-light-primary px-6 py-8 rounded-2 mb-7">
                  {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                        fill="currentColor"
                      />
                      <path
                        d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}{" "}
                  <a href="#" className="text-primary fw-semibold fs-6">
                    New Projects
                  </a>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div className="row g-0">
                {/*begin::Col*/}
                <div className="col bg-light-danger px-6 py-8 rounded-2 me-7">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}{" "}
                  <a
                    href="#"
                    className="text-danger fw-semibold fs-6 mt-2"
                  >
                    Item Orders
                  </a>
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col bg-light-success px-6 py-8 rounded-2">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                  <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}{" "}
                  <a
                    href="#"
                    className="text-success fw-semibold fs-6 mt-2"
                  >
                    Bug Reports
                  </a>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Stats*/}
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Mixed Widget 2*/}
      </div>
      {/*end::Col*/}
    </>
  )
}
export function StatisticsData() {
  return (<>
    {/*begin::Col*/}
    <div className="col-xl-4 mb-xl-10">
      {/*begin::Mixed Widget 6*/}
      <div className="card h-xl-100">
        {/*begin::Beader*/}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">
              Sales Statistics
            </span>
            <span className="text-muted fw-semibold fs-7">
              Recent sales statistics
            </span>
          </h3>
          <div className="card-toolbar">
            {/*begin::Menu*/}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
              <span className="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect
                      x={5}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                    />
                    <rect
                      x={14}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={5}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={14}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*begin::Menu 1*/}
            <div
              className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
              data-kt-menu="true"
              id="kt_menu_63e333ba3b5d7"
            >
              {/*begin::Header*/}
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bold">
                  Filter Options
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Menu separator*/}
              <div className="separator border-gray-200" />
              {/*end::Menu separator*/}
              {/*begin::Form*/}
              <div className="px-7 py-5">
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-semibold">
                    Status:
                  </label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <div>
                    <select
                      className="form-select form-select-solid"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-dropdown-parent="#kt_menu_63e333ba3b5d7"
                      data-allow-clear="true"
                    >
                      <option />
                      <option value={1}>Approved</option>
                      <option value={2}>Pending</option>
                      <option value={2}>In Process</option>
                      <option value={2}>Rejected</option>
                    </select>
                  </div>
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-semibold">
                    Member Type:
                  </label>
                  {/*end::Label*/}
                  {/*begin::Options*/}
                  <div className="d-flex">
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                      />
                      <span className="form-check-label">Author</span>
                    </label>
                    {/*end::Options*/}
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={2}
                        defaultChecked="checked"
                      />
                      <span className="form-check-label">
                        Customer
                      </span>
                    </label>
                    {/*end::Options*/}
                  </div>
                  {/*end::Options*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-semibold">
                    Notifications:
                  </label>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
                  <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      name="notifications"
                      defaultChecked=""
                    />
                    <label className="form-check-label">
                      Enabled
                    </label>
                  </div>
                  {/*end::Switch*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}
                <div className="d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-sm btn-light btn-active-light-primary me-2"
                    data-kt-menu-dismiss="true"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary"
                    data-kt-menu-dismiss="true"
                  >
                    Apply
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Form*/}
            </div>
            {/*end::Menu 1*/}
            {/*end::Menu*/}
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body p-0 d-flex flex-column">
          {/*begin::Stats*/}
          <div className="card-px pt-5 pb-10 flex-grow-1">
            {/*begin::Row*/}
            <div className="row g-0 mt-5 mb-10">
              {/*begin::Col*/}
              <div className="col">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-info">
                      {/*begin::Svg Icon | path: icons/duotune/art/art007.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-info">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M20.859 12.596L17.736 13.596L10.388 20.944C10.2915 21.0406 10.1769 21.1172 10.0508 21.1695C9.9247 21.2218 9.78953 21.2486 9.65302 21.2486C9.5165 21.2486 9.3813 21.2218 9.25519 21.1695C9.12907 21.1172 9.01449 21.0406 8.918 20.944L2.29999 14.3229C2.10543 14.1278 1.99619 13.8635 1.99619 13.588C1.99619 13.3124 2.10543 13.0481 2.29999 12.853L11.853 3.29999C11.9495 3.20341 12.0641 3.12679 12.1902 3.07452C12.3163 3.02225 12.4515 2.9953 12.588 2.9953C12.7245 2.9953 12.8597 3.02225 12.9858 3.07452C13.1119 3.12679 13.2265 3.20341 13.323 3.29999L21.199 11.176C21.3036 11.2791 21.3797 11.4075 21.4201 11.5486C21.4605 11.6898 21.4637 11.8391 21.4295 11.9819C21.3953 12.1247 21.3249 12.2562 21.2249 12.3638C21.125 12.4714 20.9989 12.5514 20.859 12.596Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.8 10.184C14.7447 10.1843 14.6895 10.1796 14.635 10.1699L5.816 8.69997C5.55436 8.65634 5.32077 8.51055 5.16661 8.29469C5.01246 8.07884 4.95035 7.8106 4.99397 7.54897C5.0376 7.28733 5.18339 7.05371 5.39925 6.89955C5.6151 6.7454 5.88334 6.68332 6.14498 6.72694L14.963 8.19692C15.2112 8.23733 15.435 8.36982 15.59 8.56789C15.7449 8.76596 15.8195 9.01502 15.7989 9.26564C15.7784 9.51626 15.6642 9.75001 15.479 9.92018C15.2939 10.0904 15.0514 10.1846 14.8 10.184ZM17 18.6229C17 19.0281 17.0985 19.4272 17.287 19.7859C17.4755 20.1446 17.7484 20.4521 18.0821 20.6819C18.4158 20.9117 18.8004 21.0571 19.2027 21.1052C19.605 21.1534 20.0131 21.103 20.3916 20.9585C20.7702 20.814 21.1079 20.5797 21.3758 20.2757C21.6437 19.9716 21.8336 19.607 21.9293 19.2133C22.025 18.8195 22.0235 18.4085 21.925 18.0154C21.8266 17.6223 21.634 17.259 21.364 16.9569L19.843 15.257C19.7999 15.2085 19.7471 15.1697 19.688 15.1432C19.6289 15.1167 19.5648 15.1029 19.5 15.1029C19.4352 15.1029 19.3711 15.1167 19.312 15.1432C19.2529 15.1697 19.2001 15.2085 19.157 15.257L17.636 16.9569C17.2254 17.4146 16.9988 18.0081 17 18.6229ZM10.388 20.9409L17.736 13.5929H1.99999C1.99921 13.7291 2.02532 13.8643 2.0768 13.9904C2.12828 14.1165 2.2041 14.2311 2.29997 14.3279L8.91399 20.9409C9.01055 21.0381 9.12539 21.1152 9.25188 21.1679C9.37836 21.2205 9.51399 21.2476 9.65099 21.2476C9.78798 21.2476 9.92361 21.2205 10.0501 21.1679C10.1766 21.1152 10.2914 21.0381 10.388 20.9409Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    <div className="fs-4 text-dark fw-bold">
                      $2,034
                    </div>
                    <div className="fs-7 text-muted fw-bold">
                      Author Sales
                    </div>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-danger">
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-danger">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                            fill="currentColor"
                          />
                          <path
                            d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    <div className="fs-4 text-dark fw-bold">$706</div>
                    <div className="fs-7 text-muted fw-bold">
                      Commision
                    </div>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Row*/}
            <div className="row g-0">
              {/*begin::Col*/}
              <div className="col">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-success">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-success">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    <div className="fs-4 text-dark fw-bold">$49</div>
                    <div className="fs-7 text-muted fw-bold">
                      Average Bid
                    </div>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col">
                <div className="d-flex align-items-center me-2">
                  {/*begin::Symbol*/}
                  <div className="symbol symbol-50px me-3">
                    <div className="symbol-label bg-light-primary">
                      {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm010.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-primary">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3 16C2.4 16 2 15.6 2 15V9C2 8.4 2.4 8 3 8C3.6 8 4 8.4 4 9V15C4 15.6 3.6 16 3 16ZM13 15V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V15C11 15.6 11.4 16 12 16C12.6 16 13 15.6 13 15ZM17 15V9C17 8.4 16.6 8 16 8C15.4 8 15 8.4 15 9V15C15 15.6 15.4 16 16 16C16.6 16 17 15.6 17 15ZM9 15V9C9 8.4 8.6 8 8 8H7C6.4 8 6 8.4 6 9V15C6 15.6 6.4 16 7 16H8C8.6 16 9 15.6 9 15ZM22 15V9C22 8.4 21.6 8 21 8H20C19.4 8 19 8.4 19 9V15C19 15.6 19.4 16 20 16H21C21.6 16 22 15.6 22 15Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Symbol*/}
                  {/*begin::Title*/}
                  <div>
                    <div className="fs-4 text-dark fw-bold">
                      $5.8M
                    </div>
                    <div className="fs-7 text-muted fw-bold">
                      All Time Sales
                    </div>
                  </div>
                  {/*end::Title*/}
                </div>
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Stats*/}
          {/*begin::Chart*/}
          <div
            className="mixed-widget-6-chart card-rounded-bottom"
            data-kt-chart-color="success"
            style={{ height: 200 }}
          />
          {/*end::Chart*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Mixed Widget 6*/}
    </div>
    {/*end::Col*/}
  </>)
}
export function LatestTrends() {
  return (

    <div className="col-xl-4 mb-xl-10">
      {/*begin::List Widget 4*/}
      <div className="card h-xl-100">
        {/*begin::Header*/}
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold text-dark">
              Trends
            </span>
            <span className="text-muted mt-1 fw-semibold fs-7">
              Latest tech trends
            </span>
          </h3>
          <div className="card-toolbar">
            {/*begin::Menu*/}
            <button
              type="button"
              className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
              <span className="svg-icon svg-icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <rect
                      x={5}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                    />
                    <rect
                      x={14}
                      y={5}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={5}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x={14}
                      y={14}
                      width={5}
                      height={5}
                      rx={1}
                      fill="currentColor"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*begin::Menu 3*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
              data-kt-menu="true"
            >
              {/*begin::Heading*/}
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Payments
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Create Invoice
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link flex-stack px-3">
                  Create Payment
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    title="Specify a target name for future usage and reference"
                  />
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a href="#" className="menu-link px-3">
                  Generate Bill
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-end"
              >
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">Subscription</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Plans
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Billing
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Statements
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3">
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                          name="notifications"
                        />
                        {/*end::Input*/}
                        {/*end::Label*/}
                        <span className="form-check-label text-muted fs-6">
                          Recuring
                        </span>
                        {/*end::Label*/}
                      </label>
                      {/*end::Switch*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-1">
                <a href="#" className="menu-link px-3">
                  Settings
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 3*/}
            {/*end::Menu*/}
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
        <div className="card-body pt-5">
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center mb-7">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/plurk.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  Top Authors
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  Mark, Rowling, Esther
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +82$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center mb-7">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/telegram.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  Popular Authors
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  Randy, Steve, Mike
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +280$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center mb-7">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/vimeo.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  New Users
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  John, Pat, Jimmy
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +4500$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center mb-7">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/bebo.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  Active Customers
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  Mark, Rowling, Esther
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +686$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center mb-7">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/kickstarter.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  Bestseller Theme
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  Disco, Retro, Sports
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +726$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
          {/*begin::Item*/}
          <div className="d-flex align-items-sm-center ">
            {/*begin::Symbol*/}
            <div className="symbol symbol-50px me-5">
              <span className="symbol-label">
                <img
                  src="assets/media/svg/brand-logos/fox-hub.svg"
                  className="h-50 align-self-center"
                  alt=""
                />
              </span>
            </div>
            {/*end::Symbol*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
              <div className="flex-grow-1 me-2">
                <a
                  href="#"
                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                >
                  Fox Broker App
                </a>
                <span className="text-muted fw-semibold d-block fs-7">
                  Finance, Corporate, Apps
                </span>
              </div>
              <span className="badge badge-light fw-bold my-2">
                +145$
              </span>
            </div>
            {/*end::Section*/}
          </div>
          {/*end::Item*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::List Widget 4*/}
    </div>
  )
}

export function Row2nd() {
  return (<>
    <div className="row g-5 g-lg-10">
      {/*begin::Col*/}
      <div className="col-xl-4 mb-xl-10">
        {/*begin::Image placeholder*/}
        <style
          dangerouslySetInnerHTML={{
            __html: "tistics-widget-1 {background-image: url('assets/media/svg/shapes/abstract-4.svg');background-size: 30% auto;a-bs-theme=\"dark\"] .statistics-widget-1 {background-image: url('assets/media/svg/shapes/abstract-4-dark.svg');background-size: 30% auto;                               "
          }}
        />
        {/*end::Image placeholder*/}
        {/*begin::Statistics Widget 1*/}
        <div className="card bgi-no-repeat bgi-position-y-top bgi-position-x-end statistics-widget-1 h-xl-100">
          {/*begin::Body*/}
          <div className="card-body">
            <a
              href="#"
              className="card-title fw-bold text-muted text-hover-primary fs-4"
            >
              Meeting Schedule
            </a>
            <div className="fw-bold text-primary my-6">3:30PM - 4:20PM</div>
            <p className="text-dark-75 fw-semibold fs-5 m-0">
              Create a headline that is informative
              <br />
              and will capture readers
            </p>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Statistics Widget 1*/}
      </div>
      {/*end::Col*/}
      {/*begin::Col*/}
      <div className="col-xl-4 mb-xl-10">
        {/*begin::Image placeholder*/}
        <style
          dangerouslySetInnerHTML={{
            __html: ".statistics-widget-2 {background-image: url('assets/media/svg/shapes/abstract-2.svg');background-size: 30% auto;} [data-bs-theme=\"dark\"] .statistics-widget-2 { background-image: url('assets/media/svg/shapes/abstract-2-dark.svg');background-size: 30% auto;}"
          }}
        />
        {/*end::Image placeholder*/}
        {/*begin::Statistics Widget 1*/}
        <div className="card bgi-no-repeat bgi-position-y-top bgi-position-x-end statistics-widget-2 h-xl-100">
          {/*begin::Body*/}
          <div className="card-body">
            <a
              href="#"
              className="card-title fw-bold text-muted text-hover-primary fs-4"
            >
              Meeting Schedule
            </a>
            <div className="fw-bold text-primary my-6">03 May 2020</div>
            <p className="text-dark-75 fw-semibold fs-5 m-0">
              Great blog posts don’t just happen Even the best bloggers need it
            </p>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Statistics Widget 1*/}
      </div>
      {/*end::Col*/}
      {/*begin::Col*/}
      <div className="col-xl-4 mb-xl-10">
        {/*begin::Image placeholder*/}
        <style
          dangerouslySetInnerHTML={{
            __html: ".statistics-widget-3 {background-image: url('assets/media/svg/shapes/abstract-1.svg');background-size: 30% auto;}[data-bs-theme=\"dark\"] .statistics-widget-3 {    background-image: url('assets/media/svg/shapes/abstract-1-dark.svg');    background-size: 30% auto;}"
          }}
        />
        {/*end::Image placeholder*/}
        {/*begin::Statistics Widget 1*/}
        <div className="card bgi-no-repeat bgi-position-y-top bgi-position-x-end statistics-widget-3 h-xl-100">
          {/*begin::Body*/}
          <div className="card-body">
            <a
              href="#"
              className="card-title fw-bold text-muted text-hover-primary fs-4"
            >
              UI Conference
            </a>
            <div className="fw-bold text-primary my-6">10AM Jan, 2021</div>
            <p className="text-dark-75 fw-semibold fs-5 m-0">
              AirWays - A Front-end solution for airlines build with ReactJS
            </p>
          </div>
          {/*end::Body*/}
        </div>
        {/*end::Statistics Widget 1*/}
      </div>
      {/*end::Col*/}
    </div>
  </>);
}

export default function Home() {
  useEffect(() => {
    initMixedWidget2();
  }, []);
  return (
    <>
      {/*begin::Container*/}
      <div id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  container-xxl "
      >
        {/*begin::Post*/}
        <div className="content flex-row-fluid" id="kt_content">
          {/*begin::Row*/}
          <div className="row g-5 g-lg-10">
            <StatisticsChart />
            <StatisticsData />
            {/*begin::Col*/}
            <LatestTrends />
            {/*end::Col*/}
          </div>
          <Row2nd />


          {/*  <FullCalender />
          <Modals /> */}
        </div>
        {/*end::Post*/}
      </div>
      {/*end::Container*/}
    </>
  )
}
