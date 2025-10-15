import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates the duration between two dates in a human-readable format
 * @param dateRange - String in format "Start Date - End Date" or "Start Date - Present"
 * @returns Human-readable duration string (e.g., "2 years 3 months", "5 months", "1 year")
 */
export function calculateDuration(dateRange: string): string {
  const [startDateStr, endDateStr] = dateRange.split(' - ')
  
  const startDate = new Date(startDateStr)
  const endDate = endDateStr === 'Present' ? new Date() : new Date(endDateStr)
  
  const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                      (endDate.getMonth() - startDate.getMonth())
  
  const years = Math.floor(diffInMonths / 12)
  const months = diffInMonths % 12
  
  if (years === 0) {
    return months === 1 ? '1 month' : `${months} months`
  } else if (months === 0) {
    return years === 1 ? '1 year' : `${years} years`
  } else {
    const yearText = years === 1 ? '1 year' : `${years} years`
    const monthText = months === 1 ? '1 month' : `${months} months`
    return `${yearText} ${monthText}`
  }
}