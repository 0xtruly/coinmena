import * as React from 'react';

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="octicon octicon-flame text-orange-light mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 16l-6-6h12z" />
    </svg>
  );
}

export default ArrowDownIcon;
