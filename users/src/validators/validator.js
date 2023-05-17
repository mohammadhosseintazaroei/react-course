export default async function validate(schema,data,) {
  try {
    const result = await schema.validate(data  , { abortEarly: false});
    return result;
  } catch (error) {
    return {errors:error.errors}
  }
}
