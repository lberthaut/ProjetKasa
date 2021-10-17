import React, {Fragment} from 'react';
import aproposbanner from '../images/aproposbanner.jpg';
import Banner from '../components/banner.js';
import Dropdown from '../components/dropdown.js'
import aProposData from '../data/aproposdata.js'

export default class APropos extends React.Component {
    render() {
      return (
        <Fragment>
          <Banner src={aproposbanner} alt="Paysage" title="Nos valeurs" />
          <main>
            {aProposData.map(({ id, title, content }) => (
              <Dropdown
                className="infos"
                key={id}
                title={title}
                content={content}
              />
            ))}
          </main>
        </Fragment>
      );
    }
  }