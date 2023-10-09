import { Char } from "@/data/chars";
import styles from "./animation.module.css";
import { LoadingClasse, LoadingName, SectionLoading } from "./style";
interface LoadingProps {
  char: Char;
}
export default function Loading({ char }: LoadingProps) {
  return (
    <SectionLoading>
      <LoadingName className={styles.loading} $image={char && char.name}>
        {char && char.name!}
      </LoadingName>

      <LoadingClasse>{char && char.subtitle}</LoadingClasse>
    </SectionLoading>
  );
}
