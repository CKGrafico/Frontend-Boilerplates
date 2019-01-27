import { Container } from 'inversify';

export let container: Container = null;

export function containerSetter(_container: Container) {
  container = _container;
}
