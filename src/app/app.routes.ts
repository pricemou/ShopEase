import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcommerceComponent } from './dashboard/ecommerce/ecommerce.component';
import { CrmComponent } from './dashboard/crm/crm.component';
import { ProjectManagementComponent } from './dashboard/project-management/project-management.component';
import { LmsComponent } from './dashboard/lms/lms.component';
import { HelpdeskComponent } from './dashboard/helpdesk/helpdesk.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics.component';
import { CryptoComponent } from './dashboard/crypto/crypto.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { HospitalComponent } from './dashboard/hospital/hospital.component';
import { AppsComponent } from './apps/apps.component';
import { ToDoListComponent } from './apps/to-do-list/to-do-list.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { ContactsComponent } from './apps/contacts/contacts.component';
import { ChatComponent } from './apps/chat/chat.component';
import { EmailComponent } from './apps/email/email.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { PrimaryEmailsComponent } from './apps/email/inbox/primary-emails/primary-emails.component';
import { PromotionsEmailsComponent } from './apps/email/inbox/promotions-emails/promotions-emails.component';
import { ComposeComponent } from './apps/email/compose/compose.component';
import { ReadComponent } from './apps/email/read/read.component';
import { KanbanBoardComponent } from './apps/kanban-board/kanban-board.component';
import { FileManagerComponent } from './apps/file-manager/file-manager.component';
import { MyDriveComponent } from './apps/file-manager/my-drive/my-drive.component';
import { AssetsComponent } from './apps/file-manager/assets/assets.component';
import { ProjectsComponent } from './apps/file-manager/projects/projects.component';
import { PersonalComponent } from './apps/file-manager/personal/personal.component';
import { ApplicationsComponent } from './apps/file-manager/applications/applications.component';
import { DocumentsComponent } from './apps/file-manager/documents/documents.component';
import { MediaComponent } from './apps/file-manager/media/media.component';
import { RecentsComponent } from './apps/file-manager/recents/recents.component';
import { ImportantComponent } from './apps/file-manager/important/important.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { EcommercePageComponent } from './pages/ecommerce-page/ecommerce-page.component';
import { EProductsGridComponent } from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import { EProductsListComponent } from './pages/ecommerce-page/e-products-list/e-products-list.component';
import { EProductDetailsComponent } from './pages/ecommerce-page/e-product-details/e-product-details.component';
import { ECreateProductComponent } from './pages/ecommerce-page/e-create-product/e-create-product.component';
import { EEditProductComponent } from './pages/ecommerce-page/e-edit-product/e-edit-product.component';
import { EOrdersComponent } from './pages/ecommerce-page/e-orders/e-orders.component';
import { EOrderDetailsComponent } from './pages/ecommerce-page/e-order-details/e-order-details.component';
import { ECreateOrderComponent } from './pages/ecommerce-page/e-create-order/e-create-order.component';
import { EOrderTrackingComponent } from './pages/ecommerce-page/e-order-tracking/e-order-tracking.component';
import { ECustomersComponent } from './pages/ecommerce-page/e-customers/e-customers.component';
import { ECustomerDetailsComponent } from './pages/ecommerce-page/e-customer-details/e-customer-details.component';
import { ECartComponent } from './pages/ecommerce-page/e-cart/e-cart.component';
import { ECheckoutComponent } from './pages/ecommerce-page/e-checkout/e-checkout.component';
import { ESellersComponent } from './pages/ecommerce-page/e-sellers/e-sellers.component';
import { ESellerDetailsComponent } from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import { ECreateSellerComponent } from './pages/ecommerce-page/e-create-seller/e-create-seller.component';
import { ECategoriesComponent } from './pages/ecommerce-page/e-categories/e-categories.component';
import { EReviewsComponent } from './pages/ecommerce-page/e-reviews/e-reviews.component';
import { ERefundsComponent } from './pages/ecommerce-page/e-refunds/e-refunds.component';
import { CrmPageComponent } from './pages/crm-page/crm-page.component';
import { CContactsComponent } from './pages/crm-page/c-contacts/c-contacts.component';
import { CCustomersComponent } from './pages/crm-page/c-customers/c-customers.component';
import { CLeadsComponent } from './pages/crm-page/c-leads/c-leads.component';
import { CDealsComponent } from './pages/crm-page/c-deals/c-deals.component';
import { ProjectManagementPageComponent } from './pages/project-management-page/project-management-page.component';
import { PmProjectOverviewComponent } from './pages/project-management-page/pm-project-overview/pm-project-overview.component';
import { PmProjectsListComponent } from './pages/project-management-page/pm-projects-list/pm-projects-list.component';
import { PmCreateProjectComponent } from './pages/project-management-page/pm-create-project/pm-create-project.component';
import { PmClientsComponent } from './pages/project-management-page/pm-clients/pm-clients.component';
import { PmTeamsComponent } from './pages/project-management-page/pm-teams/pm-teams.component';
import { PmKanbanBoardComponent } from './pages/project-management-page/pm-kanban-board/pm-kanban-board.component';
import { PmUsersComponent } from './pages/project-management-page/pm-users/pm-users.component';
import { LmsPageComponent } from './pages/lms-page/lms-page.component';
import { LCoursesComponent } from './pages/lms-page/l-courses/l-courses.component';
import { LCourseDetailsComponent } from './pages/lms-page/l-course-details/l-course-details.component';
import { LCreateCourseComponent } from './pages/lms-page/l-create-course/l-create-course.component';
import { LEditCourseComponent } from './pages/lms-page/l-edit-course/l-edit-course.component';
import { LInstructorsComponent } from './pages/lms-page/l-instructors/l-instructors.component';
import { LLessonPreviewComponent } from './pages/lms-page/l-lesson-preview/l-lesson-preview.component';
import { HelpdeskPageComponent } from './pages/helpdesk-page/helpdesk-page.component';
import { HdTicketsComponent } from './pages/helpdesk-page/hd-tickets/hd-tickets.component';
import { HdTicketDetailsComponent } from './pages/helpdesk-page/hd-ticket-details/hd-ticket-details.component';
import { HdAgentsComponent } from './pages/helpdesk-page/hd-agents/hd-agents.component';
import { HdReportsComponent } from './pages/helpdesk-page/hd-reports/hd-reports.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { EventsGridComponent } from './pages/events-page/events-grid/events-grid.component';
import { EventsListComponent } from './pages/events-page/events-list/events-list.component';
import { EventDetailsComponent } from './pages/events-page/event-details/event-details.component';
import { CreateAnEventComponent } from './pages/events-page/create-an-event/create-an-event.component';
import { EditAnEventComponent } from './pages/events-page/edit-an-event/edit-an-event.component';
import { SocialPageComponent } from './pages/social-page/social-page.component';
import { ProfileComponent } from './pages/social-page/profile/profile.component';
import { TimelineComponent } from './pages/social-page/profile/timeline/timeline.component';
import { AboutComponent } from './pages/social-page/profile/about/about.component';
import { ActivityComponent } from './pages/social-page/profile/activity/activity.component';
import { ProfileSettingsComponent } from './pages/social-page/profile-settings/profile-settings.component';
import { InvoicesPageComponent } from './pages/invoices-page/invoices-page.component';
import { InvoicesComponent } from './pages/invoices-page/invoices/invoices.component';
import { InvoiceDetailsComponent } from './pages/invoices-page/invoice-details/invoice-details.component';
import { CreateInvoiceComponent } from './pages/invoices-page/create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './pages/invoices-page/edit-invoice/edit-invoice.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { TeamMembersComponent } from './pages/users-page/team-members/team-members.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { AddUserComponent } from './pages/users-page/add-user/add-user.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PUserProfileComponent } from './pages/profile-page/p-user-profile/p-user-profile.component';
import { PTeamsComponent } from './pages/profile-page/p-teams/p-teams.component';
import { PProjectsComponent } from './pages/profile-page/p-projects/p-projects.component';
import { StarterComponent } from './starter/starter.component';
import { IconsComponent } from './icons/icons.component';
import { MaterialSymbolsComponent } from './icons/material-symbols/material-symbols.component';
import { RemixiconComponent } from './icons/remixicon/remixicon.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { ConnectionsComponent } from './settings/connections/connections.component';
import { PrivacyPolicyComponent } from './settings/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './settings/terms-conditions/terms-conditions.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartsComponent } from './charts/line-charts/line-charts.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { ColumnChartsComponent } from './charts/column-charts/column-charts.component';
import { MixedChartsComponent } from './charts/mixed-charts/mixed-charts.component';
import { RadialbarChartsComponent } from './charts/radialbar-charts/radialbar-charts.component';
import { RadarChartsComponent } from './charts/radar-charts/radar-charts.component';
import { PieChartsComponent } from './charts/pie-charts/pie-charts.component';
import { PolarChartsComponent } from './charts/polar-charts/polar-charts.component';
import { MoreChartsComponent } from './charts/more-charts/more-charts.component';
import { FormsComponent } from './forms/forms.component';
import { InputSelectComponent } from './forms/input-select/input-select.component';
import { CheckboxesRadiosComponent } from './forms/checkboxes-radios/checkboxes-radios.component';
import { RichTextEditorComponent } from './forms/rich-text-editor/rich-text-editor.component';
import { FileUploaderComponent } from './forms/file-uploader/file-uploader.component';
import { TablesComponent } from './tables/tables.component';
import { UiElementsComponent } from './ui-elements/ui-elements.component';
import { AlertsComponent } from './ui-elements/alerts/alerts.component';
import { AvatarsComponent } from './ui-elements/avatars/avatars.component';
import { AccordionComponent } from './ui-elements/accordion/accordion.component';
import { BadgesComponent } from './ui-elements/badges/badges.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { BreadcrumbComponent } from './ui-elements/breadcrumb/breadcrumb.component';
import { DropdownsComponent } from './ui-elements/dropdowns/dropdowns.component';
import { ImagesComponent } from './ui-elements/images/images.component';
import { ModalComponent } from './ui-elements/modal/modal.component';
import { PaginationComponent } from './ui-elements/pagination/pagination.component';
import { ProgressComponent } from './ui-elements/progress/progress.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { VideosComponent } from './ui-elements/videos/videos.component';
import { FrontPagesComponent } from './front-pages/front-pages.component';
import { HomeComponent } from './front-pages/home/home.component';
import { FeaturesComponent } from './front-pages/features/features.component';
import { TeamComponent } from './front-pages/team/team.component';
import { FaqComponent } from './front-pages/faq/faq.component';
import { ContactComponent } from './front-pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: FrontPagesComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'features', component: FeaturesComponent},
            {path: 'team', component: TeamComponent},
            {path: 'faq', component: FaqComponent},
            {path: 'contact', component: ContactComponent}
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {path: '', component: EcommerceComponent},
            {path: 'crm', component: CrmComponent},
            {path: 'project-management', component: ProjectManagementComponent},
            {path: 'lms', component: LmsComponent},
            {path: 'helpdesk', component: HelpdeskComponent},
            {path: 'analytics', component: AnalyticsComponent},
            {path: 'crypto', component: CryptoComponent},
            {path: 'sales', component: SalesComponent},
            {path: 'hospital', component: HospitalComponent},
            {
                path: 'apps',
                component: AppsComponent,
                children: [
                    {path: '', component: ToDoListComponent},
                    {path: 'calendar', component: CalendarComponent},
                    {path: 'contacts', component: ContactsComponent},
                    {path: 'chat', component: ChatComponent},
                    {
                        path: 'email',
                        component: EmailComponent,
                        children: [
                            {
                                path: '',
                                component: InboxComponent,
                                children: [
                                    {path: '', component: PrimaryEmailsComponent},
                                    {path: 'promotions', component: PromotionsEmailsComponent}
                                ]
                            },
                            {path: 'compose', component: ComposeComponent},
                            {path: 'read', component: ReadComponent}
                        ]
                    },
                    {path: 'kanban-board', component: KanbanBoardComponent},
                    {
                        path: 'file-manager',
                        component: FileManagerComponent,
                        children: [
                            {path: '', component: MyDriveComponent},
                            {path: 'assets', component: AssetsComponent},
                            {path: 'projects', component: ProjectsComponent},
                            {path: 'personal', component: PersonalComponent},
                            {path: 'applications', component: ApplicationsComponent},
                            {path: 'documents', component: DocumentsComponent},
                            {path: 'media', component: MediaComponent},
                            {path: 'recents', component: RecentsComponent},
                            {path: 'important', component: ImportantComponent}
                        ]
                    }
                ]
            },
            {
                path: 'ecommerce-page',
                component: EcommercePageComponent,
                children: [
                    {path: '', component: EProductsGridComponent},
                    {path: 'products-list', component: EProductsListComponent},
                    {path: 'product-details', component: EProductDetailsComponent},
                    {path: 'create-product', component: ECreateProductComponent},
                    {path: 'edit-product', component: EEditProductComponent},
                    {path: 'orders', component: EOrdersComponent},
                    {path: 'order-details', component: EOrderDetailsComponent},
                    {path: 'create-order', component: ECreateOrderComponent},
                    {path: 'order-tracking', component: EOrderTrackingComponent},
                    {path: 'customers', component: ECustomersComponent},
                    {path: 'customer-details', component: ECustomerDetailsComponent},
                    {path: 'cart', component: ECartComponent},
                    {path: 'checkout', component: ECheckoutComponent},
                    {path: 'sellers', component: ESellersComponent},
                    {path: 'seller-details', component: ESellerDetailsComponent},
                    {path: 'create-seller', component: ECreateSellerComponent},
                    {path: 'categories', component: ECategoriesComponent},
                    {path: 'reviews', component: EReviewsComponent},
                    {path: 'refunds', component: ERefundsComponent}
                ]
            },
            {
                path: 'crm-page',
                component: CrmPageComponent,
                children: [
                    {path: '', component: CContactsComponent},
                    {path: 'customers', component: CCustomersComponent},
                    {path: 'leads', component: CLeadsComponent},
                    {path: 'deals', component: CDealsComponent}
                ]
            },
            {
                path: 'project-management-page',
                component: ProjectManagementPageComponent,
                children: [
                    {path: '', component: PmProjectOverviewComponent},
                    {path: 'projects-list', component: PmProjectsListComponent},
                    {path: 'create-project', component: PmCreateProjectComponent},
                    {path: 'clients', component: PmClientsComponent},
                    {path: 'teams', component: PmTeamsComponent},
                    {path: 'kanban-board', component: PmKanbanBoardComponent},
                    {path: 'users', component: PmUsersComponent}
                ]
            },
            {
                path: 'lms-page',
                component: LmsPageComponent,
                children: [
                    {path: '', component: LCoursesComponent},
                    {path: 'course-details', component: LCourseDetailsComponent},
                    {path: 'create-course', component: LCreateCourseComponent},
                    {path: 'edit-course', component: LEditCourseComponent},
                    {path: 'instructors', component: LInstructorsComponent},
                    {path: 'lesson-preview', component: LLessonPreviewComponent}
                ]
            },
            {
                path: 'helpdesk-page',
                component: HelpdeskPageComponent,
                children: [
                    {path: '', component: HdTicketsComponent},
                    {path: 'ticket-details', component: HdTicketDetailsComponent},
                    {path: 'agents', component: HdAgentsComponent},
                    {path: 'reports', component: HdReportsComponent}
                ]
            },
            {
                path: 'events',
                component: EventsPageComponent,
                children: [
                    {path: '', component: EventsGridComponent},
                    {path: 'events-list', component: EventsListComponent},
                    {path: 'event-details', component: EventDetailsComponent},
                    {path: 'create-an-event', component: CreateAnEventComponent},
                    {path: 'edit-an-event', component: EditAnEventComponent}
                ]
            },
            {
                path: 'social',
                component: SocialPageComponent,
                children: [
                    {
                        path: '',
                        component: ProfileComponent,
                        children: [
                            {path: '', component: TimelineComponent},
                            {path: 'about', component: AboutComponent},
                            {path: 'activity', component: ActivityComponent}
                        ]
                    },
                    {path: 'settings', component: ProfileSettingsComponent}
                ]
            },
            {
                path: 'invoices',
                component: InvoicesPageComponent,
                children: [
                    {path: '', component: InvoicesComponent},
                    {path: 'invoice-details', component: InvoiceDetailsComponent},
                    {path: 'create-invoice', component: CreateInvoiceComponent},
                    {path: 'edit-invoice', component: EditInvoiceComponent}
                ]
            },
            {
                path: 'users',
                component: UsersPageComponent,
                children: [
                    {path: '', component: TeamMembersComponent},
                    {path: 'users-list', component: UsersListComponent},
                    {path: 'add-user', component: AddUserComponent}
                ]
            },
            {
                path: 'profile',
                component: ProfilePageComponent,
                children: [
                    {path: '', component: PUserProfileComponent},
                    {path: 'teams', component: PTeamsComponent},
                    {path: 'projects', component: PProjectsComponent}
                ]
            },
            {path: 'starter', component: StarterComponent},
            {
                path: 'icons',
                component: IconsComponent,
                children: [
                    {path: '', component: MaterialSymbolsComponent},
                    {path: 'remixicon', component: RemixiconComponent}
                ]
            },
            {
                path: 'ui-kit',
                component: UiElementsComponent,
                children: [
                    {path: '', component: AlertsComponent},
                    {path: 'avatars', component: AvatarsComponent},
                    {path: 'accordion', component: AccordionComponent},
                    {path: 'badges', component: BadgesComponent},
                    {path: 'buttons', component: ButtonsComponent},
                    {path: 'breadcrumb', component: BreadcrumbComponent},
                    {path: 'dropdowns', component: DropdownsComponent},
                    {path: 'images', component: ImagesComponent},
                    {path: 'modal', component: ModalComponent},
                    {path: 'pagination', component: PaginationComponent},
                    {path: 'progress', component: ProgressComponent},
                    {path: 'typography', component: TypographyComponent},
                    {path: 'videos', component: VideosComponent}
                ]
            },
            {
                path: 'charts',
                component: ChartsComponent,
                children: [
                    {path: '', component: LineChartsComponent},
                    {path: 'area', component: AreaChartsComponent},
                    {path: 'column', component: ColumnChartsComponent},
                    {path: 'mixed', component: MixedChartsComponent},
                    {path: 'radialbar', component: RadialbarChartsComponent},
                    {path: 'radar', component: RadarChartsComponent},
                    {path: 'pie', component: PieChartsComponent},
                    {path: 'polar', component: PolarChartsComponent},
                    {path: 'more', component: MoreChartsComponent}
                ]
            },
            {
                path: 'tables', component: TablesComponent
            },
            {
                path: 'forms',
                component: FormsComponent,
                children: [
                    {path: '', component: InputSelectComponent},
                    {path: 'checkboxes-radios', component: CheckboxesRadiosComponent},
                    {path: 'rich-text-editor', component: RichTextEditorComponent},
                    {path: 'file-uploader', component: FileUploaderComponent}
                ]
            },
            {path: 'timeline', component: TimelinePageComponent},
            {path: 'pricing', component: PricingPageComponent},
            {path: 'faq', component: FaqPageComponent},
            {path: 'gallery', component: GalleryPageComponent},
            {path: 'testimonials', component: TestimonialsPageComponent},
            {path: 'search', component: SearchPageComponent},
            {path: 'blank-page', component: BlankPageComponent},
            {path: 'internal-error', component: InternalErrorComponent},
            {path: 'widgets', component: WidgetsComponent},
            {path: 'maps', component: MapsPageComponent},
            {path: 'notifications', component: NotificationsPageComponent},
            {path: 'members', component: MembersPageComponent},
            {path: 'my-profile', component: MyProfileComponent},
            {
                path: 'settings',
                component: SettingsComponent,
                children: [
                    {path: '', component: AccountSettingsComponent},
                    {path: 'change-password', component: ChangePasswordComponent},
                    {path: 'connections', component: ConnectionsComponent},
                    {path: 'privacy-policy', component: PrivacyPolicyComponent},
                    {path: 'terms-conditions', component: TermsConditionsComponent}
                ]
            }
        ]
    },
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    {path: 'coming-soon', component: ComingSoonComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];