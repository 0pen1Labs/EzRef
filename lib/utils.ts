import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FieldType } from '@/Types/Link'
import { ZodError, z } from 'zod'
import {
  formFieldSchema,
  formTitleFieldSchema,
} from '@/validation/formStructureSchema'

/**
 * A function that combines multiple CSS class names into a single string.
 *
 * @param {ClassValue[]} inputs - Array of CSS class names to be combined.
 * @return {string} Combined CSS class names as a single string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns an array of keys from an enum object that are not numeric.
 *
 * @param {Object} enumVariable - The enum object to extract keys from.
 * @return {Array<T>} An array of keys from the enum object that are not numeric.
 */
export function getEnumKeys<
  T extends string,
  TEnumValue extends string | number,
>(enumVariable: { [key in T]: TEnumValue }): Array<T> {
  const keyArray = Object.keys(enumVariable) as Array<T>
  const key = keyArray.filter((item) => {
    return isNaN(parseInt(item))
  })
  return key
}

/**
 * Creates a new HTML div element with the given wrapperId, appends it to the
 * document body, and returns the created element.
 *
 * @param {string} wrapperId - The ID to set for the created div element.
 * @return {HTMLElement} The newly created div element.
 */
export function createWrapperAndAppendToBody(wrapperId: string): HTMLElement {
  const wrapperElement: HTMLElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

// no use just for test
type EnumObject = { [key: string]: number | string }
type EnumObjectEnum<E extends EnumObject> = E extends {
  [key: string]: infer ET | string
}
  ? ET
  : never

/**
 * Retrieves the enum values from the provided enumObject while filtering out any numeric keys.
 *
 * @param {E} enumObject - The enum object from which to extract values.
 * @return {EnumObjectEnum<E>[]} An array of enum values extracted from the enumObject.
 */
export function getEnumValues<E extends EnumObject>(
  enumObject: E,
): EnumObjectEnum<E>[] {
  return Object.keys(enumObject)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => enumObject[key] as EnumObjectEnum<E>)
}

/**
 * Retrieves the corresponding `FieldType` enum value based on the provided string.
 *
 * @param {string} value - The string to match against the `FieldType` enum values.
 * @return {FieldType | null} The corresponding `FieldType` enum value if a match is found, otherwise `null`.
 */
export function getEnum(value: string): FieldType | null {
  switch (value) {
    case 'short':
      return FieldType.short
    case 'long':
      return FieldType.long
    case 'number':
      return FieldType.number
    case 'file':
      return FieldType.file
    case 'date':
      return FieldType.date
    default:
      return null
  }
}

export function getErrorFromZod(
  index: number,
  zodError: ZodError<
    Array<
      z.infer<typeof formTitleFieldSchema> | z.infer<typeof formFieldSchema>
    >
  >,
): { index: number; errorFields: Array<string>; isError: boolean } {
  const errorList = zodError.issues.filter((item) => {
    return item.path[0] === index
  })

  if (errorList.length === 0) {
    return { index: -1, errorFields: [], isError: false }
  }

  return {
    index,
    errorFields: errorList.map((item) => item.path[1] as string),
    isError: true,
  }
}
