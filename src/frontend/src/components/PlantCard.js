import React from "react";
import { Link } from "react-router-dom";

export default function PlantCard({ plant }) {
  return (
    <div class="bg-gray-50 rounded shadow-lg w-48">
      <Link to="/app/plant-info/:id">
        <img
          src="https://source.unsplash.com/random/200x150"
          alt=""
          class="rounded-t w-48 h-36"
        />
      </Link>
      <div class="px-1 pb-0.5">
        <div class="pl-0.5">
          <h1 class="block text-lg truncate">
            <Link to="/app/plant-info/:id">{plant.species}</Link>
          </h1>
          <h2 class="block text-sm font-light italic truncate">
            <Link to="/app/plant-info/:id">{plant.subtitle}</Link>
          </h2>
        </div>

        <div class="flex justify-between">
          <button class="flex group gap-x-0.5">
            <svg
              class="inline-block w-5 h-5 text-blue-500 fill-current group-hover:text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 294.465 294.465"
            >
              <path
                d="M174.432,32.465c-6.8-10-12.8-19.2-18.4-27.6c-0.8-1.2-2-2.4-3.2-3.2c-4.8-3.2-11.2-1.6-14.4,3.2
			c-5.2,8.4-11.2,17.2-18.4,27.6c-31.6,46.4-78.8,116.4-78.8,156.4c0,29.2,12,55.6,31.2,74.8c19.2,18.8,45.6,30.8,74.8,30.8
			s55.6-12,74.8-31.2c19.2-19.2,31.2-45.6,31.2-74.8C253.232,148.465,206.032,78.865,174.432,32.465z M207.632,248.865
			c-15.6,15.6-36.8,24.8-60.4,24.8c-23.6,0-44.8-9.6-60.4-24.8c-15.6-15.6-24.8-36.8-24.8-60.4c0-33.6,45.2-100.4,75.2-144.8
			c3.6-5.2,6.8-10.4,10-14.8c3.2,4.4,6.4,9.6,10,14.8c30,44.8,75.2,111.2,75.2,144.8
			C232.432,212.065,222.832,233.265,207.632,248.865z"
              />
              <path
                d="M209.232,181.265c-5.6-0.4-10.4,4-10.8,9.6c-0.4,8.8-3.2,17.2-7.6,24.4c-4.4,7.2-10.8,13.6-18.4,17.6
			c-4.8,2.8-6.8,9.2-4,14c3.2,5.6,9.6,7.2,14.4,4.4c10.8-6,19.6-14.8,25.6-24.8c6.4-10,10-22,10.4-34.4
			C219.232,186.465,214.832,181.665,209.232,181.265z"
              />
            </svg>
            <p class="text-blue-400 group-hover:text-blue-800">
              {plant.watering_interval}d
            </p>
          </button>
          <div class="flex gap-x-1">
            <button class="inline-block w-5 h-5 text-gray-500 fill-current hover:text-gray-700">
              <svg
                viewBox="0 0 469.336 469.336"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682
			c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128
			c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983
			c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998
			l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742
			L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771
			c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542
			l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001
			c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z"
                />
              </svg>
            </button>
            <button class="inline-block w-5 h-5 text-red-400 fill-current hover:text-red-700">
              <svg
                viewBox="-40 0 427 427.00131"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
                <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
