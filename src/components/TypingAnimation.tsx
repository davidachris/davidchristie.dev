import { useState, useEffect } from "react"

interface TypingAnimationProps {
  className?: string
}

export function TypingAnimation({ className = "" }: TypingAnimationProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  const connectionSequence = [
    "const message = \"Let's Connect!\";",
    "const socket = new WebSocket();",
    "socket.onopen = () => await socket.send(message);",
  ]

  useEffect(() => {
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false)
        setDisplayedLines([])
        setCurrentLineIndex(0)
        setCurrentCharIndex(0)
        setIsDeleting(false)
      }, 7000) // Wait 7 seconds before restarting
      return () => clearTimeout(timeout)
    }

    if (currentLineIndex >= connectionSequence.length) {
      setIsWaiting(true)
      return
    }

    const currentLine = connectionSequence[currentLineIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentLine.length) {
          // Building current line
          const newLines = [...displayedLines]
          if (newLines.length <= currentLineIndex) {
            newLines.push("")
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
          setDisplayedLines(newLines)
          setCurrentCharIndex(currentCharIndex + 1)
        } else {
          // Line complete, move to next line
          setTimeout(() => {
            setCurrentLineIndex(currentLineIndex + 1)
            setCurrentCharIndex(0)
          }, 1000)
        }
      } else {
        // Deleting mode
        if (currentCharIndex > 0) {
          const newLines = [...displayedLines]
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex - 1)
          setDisplayedLines(newLines)
          setCurrentCharIndex(currentCharIndex - 1)
        } else {
          // Current line deleted, move to previous line
          if (currentLineIndex > 0) {
            setCurrentLineIndex(currentLineIndex - 1)
            setCurrentCharIndex(connectionSequence[currentLineIndex - 1].length)
          } else {
            setIsWaiting(true)
          }
        }
      }
    }, isDeleting ? 30 : 50)

    return () => clearTimeout(timeout)
  }, [currentCharIndex, isDeleting, currentLineIndex, isWaiting, displayedLines])

  // Calculate fixed height to prevent layout shift
  const totalLines = connectionSequence.length + 1 // +1 for the prompt line
  const lineHeight = 1.25 // text-sm line height
  const fixedHeight = `${totalLines * lineHeight}rem`

  return (
    <div 
      className="font-mono text-sm"
      style={{ height: fixedHeight }}
    >
      <div className={`text-left ${className}`}>
        <div className="text-muted-foreground mb-2">$ node connect.js</div>
        {displayedLines.map((line, index) => (
          <div key={index} className="text-primary">
            {line}
            {index === currentLineIndex && !isDeleting && <span className="animate-pulse">|</span>}
          </div>
        ))}
        {currentLineIndex < connectionSequence.length && !isDeleting && displayedLines.length === currentLineIndex && (
          <div className="text-primary">
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>
    </div>
  )
}
