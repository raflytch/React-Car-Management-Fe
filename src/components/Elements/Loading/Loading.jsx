const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="grid gap-3">
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin border-indigo-300"
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="60"
            viewBox="0 0 62 60"
            fill="none"
          >
            <g id="Group 1000003705">
              <path
                id="Ellipse 713"
                d="M57.8203 26.9786L61.0693 4.11423L39.6437 12.7327L57.8203 26.9786ZM23.8447 59.327C24.9258 59.5537 25.9859 58.8612 26.2127 57.7801C26.4394 56.6991 25.7469 55.6389 24.6658 55.4122L23.8447 59.327ZM53.7345 11.6632C50.3561 7.28607 45.8331 3.92839 40.6655 1.96138L39.2425 5.69971C43.7207 7.40431 47.6403 10.314 50.568 14.1072L53.7345 11.6632ZM40.6655 1.96138C35.4979 -0.00563836 29.887 -0.505368 24.4532 0.517433L25.1931 4.4484C29.902 3.56205 34.7644 3.99511 39.2425 5.69971L40.6655 1.96138ZM24.4532 0.517433C19.0193 1.54023 13.9741 4.04573 9.87528 7.75693L12.56 10.7221C16.112 7.50599 20.4841 5.33475 25.1931 4.4484L24.4532 0.517433ZM9.87528 7.75693C5.77649 11.4681 2.78376 16.2405 1.22796 21.5464L5.06635 22.6719C6.41459 18.0738 9.00806 13.9382 12.56 10.7221L9.87528 7.75693ZM1.22796 21.5464C-0.327842 26.8523 -0.386119 32.4851 1.05957 37.822L4.92043 36.7762C3.66761 32.1512 3.71811 27.2699 5.06635 22.6719L1.22796 21.5464ZM1.05957 37.822C2.50526 43.159 5.3986 47.9922 9.41974 51.7874L12.1653 48.8785C8.68059 45.5896 6.17325 41.4011 4.92043 36.7762L1.05957 37.822ZM9.41974 51.7874C13.4409 55.5826 18.4332 58.192 23.8447 59.327L24.6658 55.4122C19.9762 54.4286 15.6499 52.1674 12.1653 48.8785L9.41974 51.7874Z"
                fill="#4F46E5"
              />
              <path
                id="Ellipse 714"
                d="M30.0007 58.0016C37.2836 58.0016 44.2797 55.1622 49.5026 50.0864C54.7255 45.0107 57.7638 38.0987 57.972 30.8187"
                stroke="#A5B4FC"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="3 6"
              />
            </g>
          </svg>
        </div>
        <span className="text-black text-sm font-normal leading-snug">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
