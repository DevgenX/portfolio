import { FC } from "react";

interface FormError {
  field: string;
  message: string;
}

interface ValidationProps {
  prefix: string;
  field: string;
  errors: FormError[];
}

const ValidationError: FC<ValidationProps> = ({ prefix, field, errors }) => {
  const errorObj = errors.reduce((acc, error) => {
    acc[error.field] = error.message;
    return acc;
  }, {} as Record<string, string>);

  const error = errorObj[field];

  // Determine the color based on the error presence
  const color = error ? "text-red-500" : "text-green-500";

  return (
    <>
      {error && (
        <span className={`text-sm ${color}`}>{prefix} is required.</span>
      )}
    </>
  );
};

export default ValidationError;
