import React, { useRef } from "react";
import "./styles/adminToggle.css";

interface AdminToggleProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminToggle = (props: AdminToggleProps) => {
  const activeRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);

  function toggleClass(e: React.MouseEvent) {
    e.preventDefault();
    activeRef?.current?.classList?.toggle("active");
    archiveRef?.current?.classList?.toggle("active");
    props.setActive(!props.active);
  }
  return (
    <div className="admin__toggle" onClick={toggleClass}>
      <div className="active__bookings active" ref={activeRef}>
        Active
      </div>
      <div className="archived__bookings" ref={archiveRef}>
        Archived
      </div>
    </div>
  );
};
