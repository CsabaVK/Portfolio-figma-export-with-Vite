import { memo, SVGProps } from 'react';

const BackgroundImageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 141' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6_349)'>
      <mask
        id='mask0_6_349'
        style={{
          maskType: 'luminance',
        }}
        maskUnits='userSpaceOnUse'
        x={-406}
        y={-182}
        width={827}
        height={323}
      >
        <path d='M420.916 -181.112H-405.344V140.723H420.916V-181.112Z' fill='white' />
      </mask>
      <g mask='url(#mask0_6_349)'>
        <g filter='url(#filter0_d_6_349)'>
          <path
            d='M149.896 299.229C232.225 299.229 298.966 232.654 298.966 150.531C298.966 68.4069 232.225 1.83246 149.896 1.83246C67.5661 1.83246 0.824829 68.4069 0.824829 150.531C0.824829 232.654 67.5661 299.229 149.896 299.229Z'
            fill='#D7C49E'
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id='filter0_d_6_349'
        x={-25.4422}
        y={-4.18054}
        width={352.142}
        height={351.396}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={0.733} dy={20.987} />
        <feGaussianBlur stdDeviation={13.5} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.4 0 0 0 0 0.34902 0 0 0 0 0.25098 0 0 0 0.078 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_6_349' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_6_349' result='shape' />
      </filter>
      <clipPath id='clip0_6_349'>
        <rect width={300} height={140} fill='white' transform='translate(0 0.265991)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(BackgroundImageIcon2);
export { Memo as BackgroundImageIcon2 };
