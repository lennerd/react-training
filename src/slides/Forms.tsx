import React from "react";
import { FlexBox, Heading, Link, Slide, Text } from "spectacle";
import CodePane from "../components/CodePane";
import ReactTrainingExample from "../components/ReactTrainingExample";

export default function Forms() {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h3" lineHeight={2} color="quaternary">
            Formulare
          </Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"heroes-react-form"} />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" lineHeight={2} color="secondary">
            react-hook-form
          </Heading>
          <Text textAlign="center" lineHeight={1.5}>
            <Link href="https://react-hook-form.com/" target="_blank">
              react-hook-form.com
            </Link>
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Fokus auf Performance und Flexibilität
          </Text>
          <Text textAlign="center" lineHeight={1.5}>
            Hooks-API, Uncontrolled Komponenten
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading fontSize="h4" color="secondary">
            react-hook-form-API
          </Heading>
          <CodePane highlightRanges={[4, [9, 10], [12, 16]]}>{`
import { useForm } from "react-hook-form";

export default function App({ hero }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={hero.name} {...register("name", { required: true })} />
      {errors.name && <span>Your hero needs a name!</span>}
      
      <select defaultValue={hero.gender} {...register("gender")}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      
      <button type="submit">Save</button>
    </form>
  );
}
 `}</CodePane>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <ReactTrainingExample example={"heroes-react-hook-form"} />
        </FlexBox>
      </Slide>
    </>
  );
}
