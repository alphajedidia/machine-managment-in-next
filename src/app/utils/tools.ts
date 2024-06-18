export function removeDuplicatesAndJoin(array: string[]): string {
    const arrayWithoutDuplicates = Array.from(new Set(array));
    
    return arrayWithoutDuplicates.join(", ");
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };