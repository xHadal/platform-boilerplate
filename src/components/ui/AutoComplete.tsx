import {
  Fragment,
  FC,
  useState,
  ChangeEvent,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { HighlightText } from "@utils/HighlightText";
import { useDebounce } from "@utils/Debounce";
import styled from "styled-components";

interface AutoCompleteProps<T> {
  data: T[] | undefined;
  isLoading?: boolean;
  error?: string | undefined;
  onFilter?: (value: string) => void;
}

type SearchState = {
  text: string;
  suggestions: string[] | undefined;
};

const AutoComplete: FC<AutoCompleteProps<string>> = ({
  data,
  isLoading,
  error,
  onFilter,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  const [search, setSearch] = useState<SearchState>({
    text: "",
    suggestions: data ?? [],
  });
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const debouncedInputValueHook = useDebounce(search.text, 300);

  useEffect(() => {
    setSearch((prevSearch) => ({ ...prevSearch, suggestions: data }));
  }, [data]);

  // Filter data based on input value {value: string} @returns Promise<string[]>
  const filterData = async (value: string) => {
    const regex = new RegExp(`^${value}`, "i");
    return data?.sort().filter((d: string) => regex.test(d)) ?? [];
  };

  // Handle input change {e: React.ChangeEvent<HTMLInputElement>} @returns void
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setIsComponentVisible(text.length > 0);

    setSearch((prevState) => ({ ...prevState, text }));
  };

  // Filter data on input change
  useEffect(() => {
    (async () => {
      const suggestions = await filterData(debouncedInputValueHook);
      onFilter && onFilter(search.text);
      setSearch((prevSearch) => ({ ...prevSearch, suggestions }));
    })();
  }, [debouncedInputValueHook]);

  // Handle selection change {e: string} @returns void
  const onSelection = (e: string): void => {
    onFilter && onFilter(e);
    setSearch({ suggestions: [e], text: e });
  };

  return (
    <Fragment>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <StyledAutoComplete>
          <p>{search.suggestions?.length} results found</p>
          <div>
            <StyledInput
              value={search.text}
              type="text"
              placeholder="Search"
              onChange={onTextChange}
              ref={inputRef}
            ></StyledInput>
            <StyledButton
              onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
              {isComponentVisible ? "-" : "+"}
            </StyledButton>
          </div>

          <StyledList
            onClick={() => setIsComponentVisible(false)}
            style={{
              display: isComponentVisible ? "block" : "none",
            }}
          >
            {search.suggestions?.map((suggestion, i) => {
              return (
                <li
                  className="auto-complete__list__item"
                  onClick={() => onSelection(suggestion)}
                  key={i}
                >
                  {HighlightText({
                    text: suggestion,
                    highlight: search.text,
                    color: "#35aca2",
                  })}
                </li>
              );
            })}
          </StyledList>
        </StyledAutoComplete>
      )}
    </Fragment>
  );
};

export default AutoComplete;
const StyledAutoComplete = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
  }
  p {
    font-size: 12px;
    text-align: right;
    margin-right: 45px;
    color: ${(props) => props.theme.palette.text.primary};
  }
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.common.secondary};
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  &:focus,
  :focus-visible {
    outline: 1px auto #eef4ff;
  }
`;
const StyledList = styled.ul`
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: ${(props) => props.theme.common.secondaryHover};
  max-height: 200px;
  overflow-y: scroll;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  border-radius: 5px;
  li {
    padding: 10px 20px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.text.primary};
    &:hover {
      background: ${(props) => props.theme.common.secondary};
    }
  }
`;

const StyledButton = styled.button`
  width: 45px;
  height: 40px;
  font-size: 16px;
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  background-color: ${(props) => props.theme.common.secondary};
  cursor: pointer;
  transition: all 0.25s;
  &:hover {
    border-color: ${(props) => props.theme.common.secondaryHover};
  }
`;
