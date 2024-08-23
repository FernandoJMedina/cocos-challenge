import debounce from "lodash.debounce";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./search-input.module.scss";

type FormValues = {
  search: string;
};

type SearchInputProps = {
  onSearch: (query: Uppercase<string>) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
  const { register, watch } = useForm<FormValues>();

  useEffect(() => {
    const debouncedCb = debounce(
      (formValue) => onSearch(formValue.search.toUpperCase()),
      500
    );

    const subscription = watch(debouncedCb);

    return () => subscription.unsubscribe();
  }, [watch, onSearch]);

  return (
    <form className={styles.form}>
      <label>
        Instruments
        <input
          placeholder="Search actives"
          type="text"
          {...register("search")}
        />
      </label>
    </form>
  );
}
