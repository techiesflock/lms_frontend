import Link from "next/link";
import type { NavNode } from "@/config/marketingNav";

function NavList({ nodes }: { nodes: NavNode[] }) {
  return (
    <ul className="submenu">
      {nodes.map((node, i) => {
        if (node.kind === "link") {
          return (
            <li key={`${node.href}-${i}`}>
              <Link href={node.href}>{node.label}</Link>
            </li>
          );
        }
        return (
          <li key={`${node.label}-${i}`} className="has-submenu">
            <a href="#">{node.label}</a>
            <NavList nodes={node.children} />
          </li>
        );
      })}
    </ul>
  );
}

export function NavSimpleDropdown({
  label,
  children,
}: {
  label: string;
  children: NavNode[];
}) {
  return (
    <li className="has-submenu">
      <a href="#">
        {label} <i className="fas fa-chevron-down" />
      </a>
      <NavList nodes={children} />
    </li>
  );
}
