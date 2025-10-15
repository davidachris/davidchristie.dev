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
  
  // Safari-compatible date parsing
  const parseDate = (dateStr: string): Date => {
    if (dateStr === 'Present') {
      return new Date()
    }
    
    // Handle formats like "August 2024", "November 2017"
    const parts = dateStr.trim().split(' ')
    if (parts.length === 2) {
      const [month, year] = parts
      const monthIndex = new Date(`${month} 1, ${year}`).getMonth()
      if (!isNaN(monthIndex)) {
        return new Date(parseInt(year), monthIndex, 1)
      }
    }
    
    // Fallback to standard parsing
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date format: ${dateStr}`)
      return new Date()
    }
    return date
  }
  
  const startDate = parseDate(startDateStr)
  const endDate = parseDate(endDateStr)
  
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