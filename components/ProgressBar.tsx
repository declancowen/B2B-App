interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-12 mt-4">
      <p className="text-sm text-gray-600 mb-3">Step {currentStep} of {totalSteps}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-black h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
} 