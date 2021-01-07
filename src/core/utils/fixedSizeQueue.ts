export class FixedSizeQueue<T> {
  private queue: T[];

  constructor(public size: number, initialValues: T[]) {
    this.queue = Array.from(new Set(initialValues));
    this.trimTail();
  }

  get values(): T[] {
    return [...this.queue];
  }

  push(item: T) {
    this.ensureUniq(item);
    this.queue.push(item);
    this.trimHead();
  }

  unshift(item: T) {
    this.ensureUniq(item);
    this.queue.unshift(item);
    this.trimTail();
  }

  splice(start: number, deleteCount?: number | undefined) {
    this.queue.splice(start, deleteCount);
    this.trimTail();
  }

  private trimHead(): void {
    if (this.queue.length > this.size) {
      this.queue.splice(0, this.queue.length - this.size);
    }
  }

  private trimTail(): void {
    if (this.queue.length > this.size) {
      this.queue.splice(this.size, this.queue.length - this.size);
    }
  }

  private ensureUniq(item: T): void {
    const lastIndex = this.queue.lastIndexOf(item);
    if (lastIndex >= 0) {
      this.queue.splice(lastIndex, 1);
    }
  }
}
