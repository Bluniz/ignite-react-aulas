export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.respository.name}</strong>
      <p>{props.respository.description}</p>
      <a href={props.respository.html_url}>Acessar repositório</a>
    </li>
  );
}
