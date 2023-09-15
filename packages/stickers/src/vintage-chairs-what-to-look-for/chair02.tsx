/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import { _x } from '@googleforcreators/i18n';

/**
 * Internal dependencies
 */
import type { StickerProps, Sticker } from '../types';

const title = _x('Chair 02', 'sticker name', 'web-stories');

function ChairIcon02({ style }: StickerProps) {
  return (
    <svg
      style={style}
      viewBox="0 0 50 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.0968 17.3675L49.0194 17.3943C46.9075 18.1225 45.085 18.7512 44.1492 22.5762L44.0673 22.917C43.8582 23.7892 43.5917 24.888 43.1001 26.0612C38.367 29.9734 32.1115 32.0417 24.9991 32.0417C17.8561 32.0417 11.1197 29.821 6.97849 26.101L6.93484 26.15C6.41872 24.9439 6.14611 23.8106 5.93093 22.917L5.84899 22.5762C4.91324 18.7505 3.0892 18.1218 0.977999 17.3935L0.901423 17.3675C0.736784 17.1324 0.762055 17.0045 0.771244 16.9594C0.865432 16.493 1.91376 15.9256 3.12825 15.2701C5.21035 14.1467 8.06127 12.6068 10.3922 9.66856C11.8403 8.22127 12.9085 6.9593 13.8496 5.84665C16.8032 2.35785 18.1502 0.765839 24.9662 0.765839C31.8075 0.765839 33.1682 2.36245 36.1478 5.85967C37.092 6.96772 38.1617 8.22357 39.5776 9.63716C41.9392 12.6068 44.7894 14.146 46.87 15.2701C48.0844 15.9256 49.1328 16.4922 49.227 16.9586C49.2362 17.0045 49.2614 17.1316 49.0968 17.3675ZM26.2819 34.5415L26.2452 34.5431C25.9572 34.5469 24.039 34.5469 23.7534 34.5431L23.7166 34.5415C13.9057 34.2245 9.70552 30.9432 7.72756 27.691C12.0365 30.9134 18.3494 32.8071 24.9993 32.8071C31.6713 32.8071 37.6113 31.0206 42.307 27.6336C40.3436 30.9049 36.1502 34.223 26.2819 34.5415ZM41.8292 54.011H41.0803L34.8975 33.9864C35.5247 33.7873 36.1097 33.5698 36.6565 33.337L41.8292 54.011ZM32.8309 44.0559H32.0835L29.3176 35.1011C29.7411 35.0567 30.1538 35.0061 30.5536 34.9502L32.8309 44.0559ZM17.9176 44.0559H17.168L19.4461 34.9502C19.8466 35.0061 20.2578 35.0575 20.682 35.1011L17.9176 44.0559ZM8.92027 54.011H8.17059L13.3433 33.337C13.8901 33.5698 14.4766 33.7873 15.103 33.9864L8.92027 54.011ZM49.9787 16.8084C49.8141 15.9891 48.788 15.4354 47.235 14.5961C45.2119 13.5034 42.4421 12.0079 40.1494 9.12708C38.7251 7.70354 37.6661 6.45995 36.7311 5.36338C33.6887 1.79188 32.1618 0 24.9667 0C17.7946 0 16.1865 1.90061 13.2659 5.35189C12.334 6.45305 11.2772 7.70201 9.82307 9.16001C7.55872 12.0079 4.7882 13.5042 2.76583 14.5961C1.21134 15.4354 0.185221 15.9891 0.021348 16.8084C-0.0521649 17.176 0.0642305 17.5543 0.369768 17.9326L0.437921 18.0175L0.72891 18.1179C2.78421 18.8262 4.26901 19.3385 5.10522 22.7584L5.18716 23.0961C5.81355 25.7081 6.90782 30.2628 12.6342 33.018L7.18962 54.7771H9.48537L15.8373 34.2042C16.7095 34.45 17.6568 34.6613 18.6875 34.8329L16.1873 44.8222H18.483L21.4618 35.1736C22.1748 35.2334 22.9114 35.2824 23.6925 35.3076L23.6933 35.2885C23.9207 35.3122 24.3112 35.3122 25.0012 35.3122C25.6636 35.3122 26.0641 35.3122 26.3068 35.2885L26.3076 35.3076C27.0871 35.2824 27.8245 35.2334 28.5382 35.1736L31.517 44.8222H33.812L31.3126 34.8329C32.3433 34.6613 33.2898 34.45 34.1627 34.2042L40.5139 54.7771H42.8097L37.3651 33.018C43.0922 30.2628 44.1857 25.7081 44.8129 23.0961L44.8941 22.7584C45.7303 19.3385 47.2143 18.8262 49.2696 18.1186L49.5614 18.0175L49.6303 17.9326C49.9351 17.5543 50.0522 17.176 49.9787 16.8084Z"
        fill="#313831"
      />
    </svg>
  );
}

export default {
  aspectRatio: 50 / 55,
  svg: ChairIcon02,
  title,
} as Sticker;
