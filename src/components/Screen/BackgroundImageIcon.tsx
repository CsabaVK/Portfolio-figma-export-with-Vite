import { memo, SVGProps } from 'react';

const BackgroundImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 283 151' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_6_341)'>
      <mask
        id='mask0_6_341'
        style={{
          maskType: 'luminance',
        }}
        maskUnits='userSpaceOnUse'
        x={-412}
        y={-147}
        width={775}
        height={298}
      >
        <path d='M362.876 -146.862H-411.831V150.117H362.876V-146.862Z' fill='white' />
      </mask>
      <g mask='url(#mask0_6_341)'>
        <g
          style={{
            mixBlendMode: 'darken',
          }}
          filter='url(#filter0_d_6_341)'
        >
          <path
            opacity={0.322}
            d='M141.435 281.058C218.539 281.058 281.044 218.506 281.044 141.343C281.044 64.1802 218.539 1.62744 141.435 1.62744C64.3306 1.62744 1.82547 64.1802 1.82547 141.343C1.82547 218.506 64.3306 281.058 141.435 281.058Z'
            fill='#80BCBC'
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id='filter0_d_6_341'
        x={-24.4415}
        y={-4.38556}
        width={333.218}
        height={333.431}
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
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.078 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_6_341' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_6_341' result='shape' />
      </filter>
      <clipPath id='clip0_6_341'>
        <rect width={283} height={150} fill='white' transform='translate(0 0.547119)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(BackgroundImageIcon);
export { Memo as BackgroundImageIcon };
