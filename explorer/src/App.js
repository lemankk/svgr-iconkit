import { BootstrapProvider } from "@bootstrap-styled/provider";
import {
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Option,
} from "@bootstrap-styled/v4";
import { useCallback, useState } from "react";
import { TwitterPicker } from "react-color";
import IconsetListView from "./components/IconListView";
import IconsetInfoPanel from "./components/IconsetPanel";
import Picker from "./components/Picker";
import Toolbar from "./components/Toolbar";
import { iconsets } from "./config";

export default function App() {
  const [currentIconsetIndex, setIconsetIndex] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [currentVariant, setVariant] = useState("regular");
  const onChangeIconset = useCallback((newIndex) => {
    setIconsetIndex(newIndex);
    setVariant("regular");
    setMaxIconsShown(100);
  }, []);
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState("#0693E3");
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);

  const iconsetInfo = iconsets[currentIconsetIndex] || {};

  const { iconNames = [] } = iconsetInfo;

  const isSearchMode =
    !!keyword && typeof keyword === "string" && keyword.length > 0;
  const [maxIconsShown, setMaxIconsShown] = useState(50);

  const matchedIconNames = !isSearchMode
    ? iconNames
    : iconNames.filter((name) => name.includes(keyword));

  const onShowMore = () => setMaxIconsShown(maxIconsShown + 50);
  return (
    <BootstrapProvider>
      <div className="App">
        <div className="wrapper">
          <aside>
            <div style={{ marginBottom: 20 }}>
              <h1>svgr-iconkit</h1>

              <Form>
                <FormGroup>
                  <Input
                    type="select"
                    onChange={(evt) => onChangeIconset(evt.target.value)}
                  >
                    {iconsets.map(({ name, packageName }, index) => (
                      <Option key={packageName} value={index}>
                        {name}
                      </Option>
                    ))}
                  </Input>
                </FormGroup>
              </Form>
            </div>
            <IconsetInfoPanel
              variantName={currentVariant}
              keyword={keyword}
              onKeywordChange={setKeyword}
              onVariantChange={setVariant}
              iconsetInfo={iconsetInfo}
            />
          </aside>
          <main>
            <Toolbar>
              <div>
                <ButtonGroup>
                  <Button color="default" disabled>
                    Size
                  </Button>
                  {[16, 24, 32, 48].map((value) => (
                    <Button
                      onClick={() => setIconSize(value)}
                      key={`$size-${value}`}
                      color={iconSize === value ? "primary" : "default"}
                    >
                      {value}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
              <Picker
                isOpen={isColorPickerOpen}
                onClose={() => setColorPickerOpen(false)}
                content={
                  <TwitterPicker
                    color={iconColor}
                    onChangeComplete={(color) => setIconColor(color.hex)}
                  />
                }
              >
                <ButtonGroup>
                  <Button color="default" disabled>
                    Color
                  </Button>
                  <Button
                    onClick={() => setColorPickerOpen(true)}
                    color="light"
                    style={{ backgroundColor: iconColor }}
                  >
                    {iconColor}
                  </Button>
                </ButtonGroup>
              </Picker>
              <div>
                <Form inline className="my-2 my-lg-0">
                  <InputGroup>
                    <Input
                      type="text"
                      value={keyword}
                      placeholder="Search icons..."
                      onChange={(evt) => {
                        setKeyword(evt.target.value);
                        setMaxIconsShown(100);
                      }}
                    />
                  </InputGroup>
                </Form>
              </div>
            </Toolbar>
            <div>
              {isSearchMode && (
                <span>
                  {matchedIconNames.length} icon(s) matched by given keyword.
                </span>
              )}
            </div>

            <IconsetListView
              variantName={currentVariant}
              keyword={keyword}
              iconSize={iconSize}
              iconColor={iconColor}
              iconsetInfo={iconsetInfo}
              matchedIconNames={matchedIconNames}
              maxIconsShown={maxIconsShown}
              isSearchMode={isSearchMode}
              onShowMore={onShowMore}
            />
          </main>
        </div>
      </div>
    </BootstrapProvider>
  );
}
