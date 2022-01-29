import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import React, { useEffect, useState } from "react";
import { useForm } from "../../shared/hooks/form-hook";
import { useParams } from "react-router";
import "./PlaceForm.css";

//copied for now
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "The empire state building...",
    imageUrl:
      "https://www.rockettes.com/wp-content/uploads/sites/2/2016/06/empire-state-building-nys.jpg",
    address: "20 W 34th St, New York, NY 10001",
    coordinates: {
      lat: 40.748446,
      lng: -73.98689,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "A second instance by a different user.",
    imageUrl:
      "https://www.newyorkfamily.com/wp-content/uploads/2020/08/fp-Empire-state-building-2020-09-799x1200.jpg",
    address: "20 W 34th St, New York, NY 10001",
    coordinates: {
      lat: 40.748446,
      lng: -73.98689,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: { value: identifiedPlace.description, isValid: true },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place.</h2>
        </Card>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description ( >= 5 characters )"
        onInput={() => {}}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Save
      </Button>
    </form>
  );
};

export default UpdatePlace;
