import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn, UseFormProps } from "react-hook-form";
import { memo } from "react";
import { useContainerHook } from "./_hook";

type FormProps<TFormValues> = {
  onSubmit: Function;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  validationSchema?: any;
  className?: string;
  options?: UseFormProps<TFormValues>;
};

const Index = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  className,
  children,
  options,
  validationSchema,
  ...props
}: FormProps<TFormValues>) => {
  const { onSubmitHandler } = useContainerHook();
  const methods = useForm<TFormValues>({
    ...(!!validationSchema && { resolver: yupResolver(validationSchema) }),
    ...(!!options && options),
  });
  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit(
        data => onSubmit(data, methods.setError, methods.formState, methods.trigger) ?? onSubmitHandler,
      )}
      noValidate
      {...props}
    >
      {children(methods)}
    </form>
  );
};

export default memo(Index);
