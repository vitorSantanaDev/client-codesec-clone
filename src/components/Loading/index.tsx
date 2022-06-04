import * as S from './styles'

type LoadingProps = {
  isLoading: boolean
}

const Loading = ({ isLoading }: LoadingProps) => (
  <S.Wrapper isLoading={isLoading}>
    <svg
      width="156"
      height="116"
      viewBox="0 0 156 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="eye"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 43.0232C59.4714 1.79446 92.8411 -1.11844 142 43.0232C93.9609 86.7166 58.4635 84.588 13 43.0232ZM77.5 68C91.031 68 102 57.031 102 43.5C102 29.969 91.031 19 77.5 19C63.969 19 53 29.969 53 43.5C53 57.031 63.969 68 77.5 68Z"
        fill="url(#paint0_linear_1289_205)"
        stroke="url(#paint0_linear_1289_205)"
      />
      <path
        className="key"
        stroke="#FFFF"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M74.0847 60L75.0763 39.8836C72.6525 38.6404 71.2203 36.9452 71 33.6678C71 29.5993 73.9746 27 77.6102 27C81.1356 27 84 29.9384 84 33.6678C84 36.7192 81.6864 39.6575 79.2627 39.8836L79.9237 50.0548H82.1271V53.4452H80.3644V55.0274H83.7797V60H74.0847Z"
        fill="white"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M87.2237 87H71.0822V99.2699C71.0822 102.197 73.9006 105 76.7189 105H87.2237V100.578H77.1032C75.4379 100.578 75.0535 99.7059 75.0535 98.3356H84.8537V93.8512H75.0535V91.4844L87.2878 91.609L87.2237 87Z"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M108.041 87H89.6577V98.3356H103.557V100.578H89.6577V105H108.041V97.9619C108.041 95.5329 105.671 93.8512 103.814 93.8512H94.2055V91.4844H108.041V87Z"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M126.553 87H110.475V99.4567C110.475 102.073 113.037 105 116.24 105H126.553V100.578H116.24C114.959 100.578 114.318 99.6436 114.318 98.3356H124.183V93.8512H114.318V91.4844H126.553V87Z"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M133.278 87C130.844 87 128.859 89.2422 128.859 91.4844V99.1453C128.859 101.886 131.421 105 134.687 105H145V100.578H136.993C135.2 100.578 133.534 99.3945 133.534 97.7751V91.4844H145V87H133.278Z"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M27.2055 87H15.2275C13.37 87 11 88.7439 11 91.173V99.7059C11 101.699 13.5621 105 16.957 105H29.5115V100.578H34.1233V105H40.5287C44.5045 104.12 46.3354 102.945 48.0229 98.1488V94.2249C48.0229 90.737 43.4111 87 40.7208 87H37.1979C33.0985 87 29.5115 90.8616 29.5115 94.0381V100.578H18.8786C16.8929 100.578 15.6119 99.3322 15.6119 97.3391V91.4844H27.2055V87ZM34.1233 100.578V95.2837C34.1233 92.917 36.6214 91.609 38.7992 91.609C41.2333 91.609 43.4111 93.4152 43.4111 96.0934C43.4111 98.4602 41.3614 100.578 39.5038 100.578H34.1233Z"
      />
      <path
        className="letter"
        fill="#EDF1F7"
        stroke="#EDF1F7"
        strokeWidth="0.5"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M50.2648 87V105H58.912C64.869 105 68.7122 99.3322 68.7122 95.2837V91.4844H64.1644V87H50.2648ZM64.1644 91.4844H54.8767V100.578H58.912C61.3461 100.578 64.1644 98.1488 64.1644 95.2837V91.4844Z"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1289_205"
          x1="142"
          y1="43"
          x2="77.9347"
          y2="107.499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FA5770" />
          <stop offset="1" stopColor="#E83752" />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Loading
