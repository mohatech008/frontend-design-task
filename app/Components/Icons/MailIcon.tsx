// components/icons/GmailIcon.tsx
import React from 'react';

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_42_484_gmail)">
        <path
          d="M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z"
          fill="#242938"
        />
        <path
          d="M6.50563 31.7232H11.4772V19.6493L4.375 14.3228V29.5926C4.375 30.7715 5.33031 31.7232 6.50563 31.7232Z"
          fill="#4285F4"
        />
        <path
          d="M28.5225 31.7232H33.4942C34.6731 31.7232 35.6248 30.7681 35.6248 29.5926V14.3228L28.5225 19.6493"
          fill="#34A853"
        />
        <path
          d="M28.5225 10.4161V19.6491L35.6248 14.3225V11.4813C35.6248 8.84645 32.617 7.34426 30.5112 8.92457"
          fill="#FBBC04"
        />
        <path
          d="M11.4775 19.649V10.4162L20.0002 16.8082L28.5229 10.416V19.649L20.0002 26.0412"
          fill="#EA4335"
        />
        <path
          d="M4.375 11.4819V14.3227L11.4772 19.6494V10.4166L9.48859 8.92506C7.37922 7.34474 4.375 8.84693 4.375 11.4819Z"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_484_gmail">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;