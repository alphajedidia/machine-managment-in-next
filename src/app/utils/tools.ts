export function removeDuplicatesAndJoin(array: string[]): string {
    const arrayWithoutDuplicates = Array.from(new Set(array));
    
    return arrayWithoutDuplicates.join(", ");
}