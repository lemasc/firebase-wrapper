/**
 * Creates a compatible modular methods from the given Firebase namespaced instance.
 */
export function createFactory<M extends Record<string, any>>(
  methods: (keyof M)[]
): Record<keyof M, any> {
  return Object.fromEntries(
    methods.map((method) => [
      method,
      (module: any, ...rest: any[]) => module[method](...rest),
    ])
  ) as any;
}
