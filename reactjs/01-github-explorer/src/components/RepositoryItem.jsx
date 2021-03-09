export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.respository?.name ?? "Default"}</strong>
      <p>{props.respository?.description}</p>
      <a href={props.respository?.link}>Acessar repositório</a>
    </li>
  );
}
