import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import ArticlesPreview from './preview-templates/ArticlesPreview'
import DeveloperPreview from './preview-templates/DeveloperPreview'
import ServicesPreview from './preview-templates/ServicesPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPreview)
CMS.registerPreviewTemplate('articles', ArticlesPreview)
CMS.registerPreviewTemplate('developer', DeveloperPreview)
