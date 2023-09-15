/*
 * Copyright 2020 Google LLC
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
import styled from 'styled-components';
/**
 * Internal dependencies
 */
import { TextSize } from '../../theme';
import { Text } from '../typography';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Hint = styled(Text.Paragraph).attrs({
  size: TextSize.Small,
})<{ hasError?: boolean }>`
  margin-top: 12px;
  padding-left: 2px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.colors.fg.negative : theme.colors.fg.tertiary};
`;
