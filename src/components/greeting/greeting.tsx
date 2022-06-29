import { greetingProps } from './types';

export default ({ message }: greetingProps) => (
  <h2>{message || 'Hello, Hope you doing great!'}</h2>
);
