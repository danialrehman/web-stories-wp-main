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

const title = _x('Open pill', 'sticker name', 'web-stories');
function OpenPill({ style }: StickerProps) {
  return (
    <svg
      style={style}
      viewBox="0 0 61 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M15.1196 22.826C15.303 23.0095 15.5354 23.0951 15.7677 23.0951C16.0001 23.0951 16.2447 22.9973 16.4159 22.826C16.7706 22.4714 16.7706 21.8844 16.4159 21.5297L10.0076 15.1215C9.65298 14.7668 9.06596 14.7668 8.7113 15.1215C8.35665 15.4761 8.35665 16.0631 8.7113 16.4178L15.1196 22.826Z"
        fill="#9F240F"
      />
      <path
        d="M7.28378 14.5955C7.05141 14.5955 6.81905 14.5099 6.63561 14.3265L6.10974 13.8006C5.75509 13.446 5.75509 12.8589 6.10974 12.5043C6.4644 12.1496 7.05141 12.1496 7.40607 12.5043L7.93194 13.0302C8.2866 13.3848 8.2866 13.9718 7.93194 14.3265C7.7485 14.5099 7.51614 14.5955 7.28378 14.5955Z"
        fill="#9F240F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4947 29.2589C15.539 29.3032 15.5861 29.3418 15.6354 29.3748C15.6722 29.4273 15.7153 29.4784 15.7649 29.528C15.985 29.7358 16.2296 29.8214 16.4742 29.8214C16.9009 29.8214 17.3275 29.5741 17.5933 29.42C17.617 29.4062 17.6394 29.3932 17.6605 29.3812C18.1007 29.1121 18.6633 28.6841 19.3482 28.1093C20.7179 26.972 22.4422 25.3699 24.2033 23.6089C25.9643 21.8478 27.5664 20.1234 28.7037 18.7537C29.2663 18.0689 29.6943 17.4941 29.9756 17.066L29.9772 17.0636C30.2226 16.6832 30.7814 15.8172 30.1346 15.1705C30.0809 15.1168 30.0257 15.0714 29.9693 15.0334C29.9359 14.9823 29.8969 14.9339 29.8522 14.8893L18.173 3.21005C16.2652 1.29001 13.7092 0.238281 10.9943 0.238281C8.2793 0.238281 5.73556 1.29001 3.81553 3.21005C-0.146843 7.17242 -0.146843 13.6174 3.81553 17.5797L15.4947 29.2589ZM5.11185 16.2834L16.1356 27.3072C16.422 26.9004 16.7853 26.4517 17.1958 25.9569C18.3331 24.5872 19.9352 22.8629 21.6962 21.1018C23.4573 19.3408 25.1816 17.7387 26.5513 16.6013C27.0772 16.16 27.531 15.8051 27.9127 15.5424L16.8767 4.50638C15.3113 2.94101 13.22 2.07272 10.9943 2.07272C8.76849 2.07272 6.67723 2.94101 5.11185 4.50638C1.87103 7.74722 1.87103 13.0304 5.11185 16.2834Z"
        fill="#9F240F"
      />
      <path
        d="M45.1097 22.826C45.2932 23.0095 45.5255 23.0951 45.7579 23.0951C45.9903 23.0951 46.2226 22.9973 46.4061 22.826L52.8143 16.4178C53.169 16.0631 53.169 15.4761 52.8143 15.1215C52.4597 14.7668 51.8727 14.7668 51.518 15.1215L45.1097 21.5297C44.7551 21.8844 44.7551 22.4714 45.1097 22.826Z"
        fill="#9F240F"
      />
      <path
        d="M54.2462 14.5955C54.0138 14.5955 53.7815 14.5099 53.598 14.3265C53.2434 13.9718 53.2434 13.3848 53.598 13.0302L54.1239 12.5043C54.4785 12.1496 55.0656 12.1496 55.4202 12.5043C55.7749 12.8589 55.7749 13.446 55.4202 13.8006L54.8943 14.3265C54.7231 14.5099 54.4785 14.5955 54.2462 14.5955Z"
        fill="#9F240F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.0568 29.3758C46.106 29.3425 46.1521 29.3036 46.1938 29.2589L57.873 17.5797C59.793 15.6719 60.8447 13.116 60.8447 10.401C60.8447 7.68607 59.793 5.1301 57.873 3.21005C55.9652 1.29001 53.4092 0.238281 50.6942 0.238281C47.9793 0.238281 45.4233 1.29001 43.5155 3.21005L31.8363 14.8893C31.8098 14.9157 31.7853 14.9435 31.7628 14.9724C31.7121 15.0079 31.6624 15.0497 31.6138 15.0982C30.9671 15.745 31.5258 16.611 31.7712 16.9913L31.7728 16.9938C32.0419 17.4341 32.4699 17.9966 33.0447 18.6815C34.182 20.0512 35.7841 21.7755 37.5452 23.5366C39.3062 25.2976 41.0306 26.8997 42.4003 28.037C43.0851 28.5996 43.6599 29.0276 44.088 29.3089C44.3326 29.4679 44.7973 29.7614 45.2742 29.7614C45.5188 29.7614 45.7634 29.688 45.9835 29.4557C46.0098 29.4294 46.0342 29.4028 46.0568 29.3758ZM45.6179 27.2421L56.5766 16.2834C59.8175 13.0426 59.8175 7.75943 56.5766 4.50638C54.999 2.92877 52.9078 2.07272 50.6942 2.07272C48.4807 2.07272 46.3772 2.94101 44.8118 4.50638L33.8371 15.4811C34.2154 15.7484 34.6741 16.0995 35.1971 16.5291C36.5668 17.6664 38.2912 19.2685 40.0522 21.0295C41.8133 22.7906 43.4153 24.515 44.5527 25.8846C44.9656 26.3824 45.3307 26.8334 45.6179 27.2421Z"
        fill="#9F240F"
      />
      <path
        d="M34.8438 29.2383C34.8438 30.3429 33.9483 31.2383 32.8438 31.2383C31.7392 31.2383 30.8438 30.3429 30.8438 29.2383C30.8438 28.1337 31.7392 27.2383 32.8438 27.2383C33.9483 27.2383 34.8438 28.1337 34.8438 29.2383Z"
        fill="#9F240F"
      />
      <path
        d="M40.8438 33.2383C40.8438 34.3428 39.9483 35.2383 38.8438 35.2383C37.7392 35.2383 36.8438 34.3428 36.8438 33.2383C36.8438 32.1337 37.7392 31.2383 38.8438 31.2383C39.9483 31.2383 40.8438 32.1337 40.8438 33.2383Z"
        fill="#9F240F"
      />
      <path
        d="M34.8438 35.2383C34.8438 36.3428 33.9483 37.2383 32.8438 37.2383C31.7392 37.2383 30.8438 36.3428 30.8438 35.2383C30.8438 34.1337 31.7392 33.2383 32.8438 33.2383C33.9483 33.2383 34.8438 34.1337 34.8438 35.2383Z"
        fill="#9F240F"
      />
      <path
        d="M26.8438 37.2383C26.8438 38.3428 25.9483 39.2383 24.8438 39.2383C23.7392 39.2383 22.8438 38.3428 22.8438 37.2383C22.8438 36.1337 23.7392 35.2383 24.8438 35.2383C25.9483 35.2383 26.8438 36.1337 26.8438 37.2383Z"
        fill="#9F240F"
      />
      <path
        d="M26.8438 30.2383C26.8438 31.3429 25.9483 32.2383 24.8438 32.2383C23.7392 32.2383 22.8438 31.3429 22.8438 30.2383C22.8438 29.1337 23.7392 28.2383 24.8438 28.2383C25.9483 28.2383 26.8438 29.1337 26.8438 30.2383Z"
        fill="#9F240F"
      />
    </svg>
  );
}

export default {
  aspectRatio: 61 / 40,
  svg: OpenPill,
  title,
} as Sticker;
