import {KeyValue} from './key-value';

export interface Entry {
  name: string;
  description: string;
  details: KeyValue[];
}