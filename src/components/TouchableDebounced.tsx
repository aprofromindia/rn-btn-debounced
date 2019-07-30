import React, { ReactElement } from 'react';
import { TouchableOpacity } from 'react-native';
import _ from 'lodash';

const WAIT_TIME_IN_MS = 1 * 1000;

type Props = { children?: ReactElement; onPress(ev?: any): any } & {[k: string]: any};

export default function TouchableDebounced({ children, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} onPress={_.debounce(onPress, WAIT_TIME_IN_MS, {leading: true, trailing : false})}>
      {children}
    </TouchableOpacity>
  );
}
