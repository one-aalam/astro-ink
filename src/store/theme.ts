import { writable } from 'svelte/store'
type ThemeType = 'dark' | 'light'

export const theme = writable<ThemeType>('dark')
