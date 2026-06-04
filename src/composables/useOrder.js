import { inject } from 'vue'

export const ORDER_KEY = Symbol('openOrder')

export function useOrder() {
  const openOrder = inject(ORDER_KEY)
  if (!openOrder) {
    throw new Error('useOrder() must be used inside DefaultLayout')
  }
  return { openOrder }
}
