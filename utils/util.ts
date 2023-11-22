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

export function getEnumValues<E extends EnumObject>(
  enumObject: E,
): EnumObjectEnum<E>[] {
  return Object.keys(enumObject)
    .filter((key) => Number.isNaN(Number(key)))
    .map((key) => enumObject[key] as EnumObjectEnum<E>)
}
