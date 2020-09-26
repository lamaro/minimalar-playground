import React from "react";
import PropTypes from "prop-types";

import { Header, Footer } from "components";
import { Main } from "containers";
import { Container } from "./styles";
import { useFetchUser } from 'lib/user'


export default function Layout({ children, isHome }) {
    const { user, loading } = useFetchUser()
  return (
    <Container>
      {!isHome && <Header loading={loading} user={user}/>}
      <Main user={user}>{children}</Main>
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  isHome: PropTypes.bool.isRequired,
};

Layout.defaultProps = {
  isHome: false,
};
