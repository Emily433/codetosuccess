import React from 'react';

function ArchiveItem() {
    return (
        <div className='archive-item'>

        </div>
    )
}
class NewsletterArchive extends Component {
    render() {
       return (
          <div className='newsletter-archive'>
              <div className='newsletter-archive__title'>{title}</div>
              <div className='newsletter-archive__items'>
                  {/* newsletter items */}
                  <ArchiveItem title='hey' date='this is the date'/>
              </div>
          </div>
        )
    }
}
