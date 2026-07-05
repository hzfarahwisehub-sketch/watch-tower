"use client";
// Barreira de erro: isola um filho que possa quebrar. Se ele lançar em render,
// mostra o fallback (ou nada) em vez de derrubar o componente pai. Usado pra
// blindar seções acessórias (ex.: GoogleCalendar dentro do card de Agenda).
import { Component, ReactNode } from "react";

export class SafeBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    /* engolido de propósito: seção acessória não pode derrubar o resto */
  }
  render() {
    if (this.state.failed) return this.props.fallback ?? null;
    return this.props.children;
  }
}
