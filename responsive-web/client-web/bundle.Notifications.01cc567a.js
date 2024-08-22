"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["bundle.Notifications", "bundle.AudioSpaceDetail"], {
    24101: (e,d,a)=>{
        a.d(d, {
            Z: ()=>p
        });
        var n = a(202784)
          , t = a(229496)
          , o = a(973186)
          , r = a(473228)
          , l = a.n(r)
          , i = a(351212);
        const s = "settingsAppBar"
          , u = l().bb081ea2
          , c = n.memo((({onPress: e, pullRight: d, to: a})=>n.createElement(t.ZP, {
            "aria-label": u,
            hoverLabel: {
                label: u
            },
            icon: n.createElement(i.default, null),
            link: a,
            onPress: e,
            pullRight: d,
            style: b.button,
            testID: s,
            type: "primaryText"
        })))
          , b = o.default.create((e=>({
            button: {
                marginVertical: `calc(-${e.spaces.space12})`
            }
        })))
          , p = c
    }
    ,
    963705: (e,d,a)=>{
        a.d(d, {
            Z: ()=>u
        });
        var n = a(202784)
          , t = a(76687)
          , o = a(392160)
          , r = a(638429)
          , l = a(687950);
        const i = (0,
        o.Z)().propsFromActions((()=>({
            updateLocation: l.YF,
            updateTweetDetailNav: r.NH
        }))).withAnalytics();
        class s extends n.Component {
            componentDidMount() {
                this._performPageUpdates(this.props)
            }
            componentDidUpdate(e) {
                const {history: {location: d}, location: {pathname: a, search: n}, locationKey: t} = this.props
                  , {location: {pathname: o, search: r}, locationKey: l} = e;
                let i = !1;
                d.pathname !== a ? this._isInBackground = !0 : this._isInBackground && d.pathname === a && (this._isInBackground = !1,
                i = !0);
                const s = t || l;
                (s && t !== l || !s && a !== o || n !== r || i) && this._performPageUpdates(this.props)
            }
            render() {
                return this.props.children
            }
            _performPageUpdates(e) {
                const {analytics: d, updateLocation: a, updateTweetDetailNav: n} = e;
                d.scribePageImpression(),
                a(d.contextualScribeNamespace, d.contextualScribeData),
                n(d.contextualScribeNamespace)
            }
        }
        s.defaultProps = {
            children: null
        };
        const u = (0,
        t.ZP)(i(s))
    }
    ,
    101451: (e,d,a)=>{
        a.d(d, {
            Z: ()=>u
        });
        var n = a(202784)
          , t = a(244173)
          , o = a(973186);
        a(906886);
        const r = (0,
        a(656499).Z)({
            loader: ()=>a.e("shared~bundle.Birdwatch~bundle.TwitterArticles~bundle.Grok~bundle.Payments~bundle.SettingsProfessionalProfile").then(a.bind(a, 968767))
        });
        var l = a(460673)
          , i = a(160007);
        const s = o.default.create((e=>({
            curationControl: {
                marginStart: e.spaces.space20
            }
        })))
          , u = (0,
        l.Z)((e=>{
            const {analytics: d, feedbackItems: a, isDisplayedOnMedia: o} = e
              , l = n.useCallback((e=>a ? n.createElement(r, {
                actionItems: a,
                onClose: e
            }) : null), [a])
              , u = n.useCallback((()=>d.scribe({
                element: "caret",
                action: "click"
            })), [d]);
            return a && a.length > 0 ? n.createElement(t.Z, {
                onClick: u,
                renderActionMenu: l,
                style: s.curationControl,
                testID: i.Z.caret,
                withDarkBackground: o
            }) : null
        }
        ))
    }
    ,
    820941: (e,d,a)=>{
        a.d(d, {
            Z: ()=>i
        });
        var n = a(202784)
          , t = a(411916)
          , o = a.n(t)
          , r = a(373463)
          , l = a.n(r);
        function i(e) {
            class d extends n.Component {
                constructor(e, d) {
                    super(e, d),
                    this.state = {
                        shouldRender: !1
                    },
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1
                }
                componentDidMount() {
                    o()((()=>{
                        this._mounted && this.setState({
                            shouldRender: !0
                        })
                    }
                    ))
                }
                render() {
                    return this.state.shouldRender ? n.createElement(e, this.props) : null
                }
            }
            return l()(d, e)
        }
    }
    ,
    10034: (e,d,a)=>{
        a.d(d, {
            C: ()=>r
        });
        var n = a(807896)
          , t = (a(906886),
        a(202784));
        class o extends t.Component {
            constructor(...e) {
                super(...e),
                this.state = {
                    isLoaded: !1
                }
            }
            componentDidMount() {
                return this._isMounted = !0,
                this.load()
            }
            componentDidUpdate(e) {
                return this.props.modules === e.modules ? null : this.load()
            }
            componentWillUnmount() {
                this._isMounted = !1
            }
            load() {
                this.setState({
                    isLoaded: !1
                });
                const {modules: e} = this.props
                  , d = Object.keys(e);
                return Promise.all(d.map((d=>e[d]()))).then((e=>d.reduce(((d,a,n)=>(d[a] = e[n],
                d)), {}))).then((e=>{
                    if (!this._isMounted)
                        return null;
                    this.setState({
                        modules: e,
                        isLoaded: !0
                    })
                }
                ))
            }
            render() {
                const {isLoaded: e} = this.state
                  , d = e ? this.state.modules : {};
                return t.Children.only(this.props.children(d || {}))
            }
        }
        const r = (e,d)=>a=>t.createElement(o, {
            modules: d
        }, (d=>t.createElement(e, (0,
        n.Z)({}, d, a))))
    }
    ,
    586095: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>p,
            notificationsModule: ()=>c,
            updateLastSeenCursor: ()=>b
        });
        var n = a(801206)
          , t = a(407276)
          , o = a(663140)
          , r = a(923335)
          , l = a(430264)
          , i = a(962104)
          , s = a(687204)
          , u = a(810286);
        const c = (e=u.l.All,d=void 0)=>(0,
        i.Z)({
            timelineId: `notifications-${e}-${null != d ? d : ""}`,
            network: {
                getEndpoint: e=>e.withEndpoint(t.Z).fetchNotifications,
                getEndpointParams: d=>{
                    const {polling: a, ...n} = d;
                    return {
                        type: e,
                        ...n
                    }
                }
            },
            context: "FETCH_NOTIFICATIONS_TIMELINE",
            perfKey: "notifications",
            postFetchAction: s.Z,
            staleIntervalMs: 5e3,
            actAsUserId: d
        })
          , b = (e=u.l.All,d=void 0)=>(a,i,{api: s})=>{
            const u = c(e, d)
              , b = u && l.f5(u.selectEntries(i()));
            if (b) {
                const d = {
                    cursor: l.NA(b),
                    type: e
                }
                  , i = a((0,
                r.zr)("APP_UPDATE_NOTIFICATION_LAST_READ")({
                    [o.ZP.AppInReadOnlyMode]: {
                        customAction: n.Z
                    }
                }));
                s.withEndpoint(t.Z).updateNotificationsLastSeenCursor(d).catch(i)
            }
        }
          , p = c(u.l.All)
    }
    ,
    833570: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>t
        });
        var n = a(810286);
        const t = (0,
        a(850755).p)({
            notificationsType: n.l.All
        })
    }
    ,
    535850: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>t
        });
        var n = a(810286);
        const t = (0,
        a(850755).p)({
            notificationsType: n.l.Mentions
        })
    }
    ,
    492669: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            NotificationsScreen: ()=>V,
            default: ()=>G
        });
        a(906886);
        var n = a(202784)
          , t = a(107267)
          , o = a(241441)
          , r = a(473228)
          , l = a.n(r)
          , i = a(24101)
          , s = a(133252)
          , u = a(509082)
          , c = a(959177)
          , b = a(849379)
          , p = a(348501)
          , h = a(254296)
          , A = a(963705)
          , m = a(820941)
          , D = a(759824)
          , M = a(385300)
          , w = a(392160)
          , y = a(660420)
          , S = a(467935);
        const T = (0,
        w.Z)().propsFromState((()=>({
            allNotificationsUnreadCount: y.pm,
            isLoggedInUserActiveCreator: S.WM
        }))).withAnalytics({
            page: "ntab"
        });
        var f = a(702632);
        const v = l().eb75875e
          , g = l().f8321d82
          , _ = l().cdb53d7a
          , k = l().h3290872
          , E = l().bc8baa08
          , C = l().a98ba778
          , N = n.createElement(i.Z, {
            pullRight: !0,
            to: "/settings/notifications"
        })
          , R = l().eb75875e
          , Z = (0,
        m.Z)((0,
        M.p)((()=>Promise.all([a.e("modules.common"), a.e("modules.audio"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.R"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisAd~bundle.NotMyAc"), a.e("shared~loader.DashMenu~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisA"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.A"), a.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"), a.e("shared~loader.DashMenu~loader.directMessagesData~loader.SideNav~loader.Typeahead~loader.AppModules~loader.DMD"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Account~bundle.ReaderMode~bu"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Grok~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bun"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"), a.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDisco"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpace"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.AudioSpaceDetail~bundle"), a.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"), a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.B"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"), a.e("shared~bundle.AccountAnalytics~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~"), a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatch~bundle."), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDiscovery~bundle.Birdwatch~bu"), a.e("shared~loader.DMDrawer~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.DirectMessages~bundl"), a.e("shared~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.Explore~bundle.LiveEvent~bundle.Home"), a.e("shared~loader.PushNotificationsPrompt~loader.MessageHandler~loader.promptHandler~bundle.Notifications"), a.e("shared~bundle.Notifications~ondemand.LeaveThisConversation"), a.e("bundle.Notifications")]).then(a.bind(a, 833570))), {
            shouldMigrateToX: !1
        }))
          , B = (0,
        m.Z)((0,
        M.p)((()=>Promise.all([a.e("modules.common"), a.e("modules.audio"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.R"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisAd~bundle.NotMyAc"), a.e("shared~loader.DashMenu~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisA"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.A"), a.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"), a.e("shared~loader.DashMenu~loader.directMessagesData~loader.SideNav~loader.Typeahead~loader.AppModules~loader.DMD"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Account~bundle.ReaderMode~bu"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Grok~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bun"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"), a.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDisco"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpace"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.AudioSpaceDetail~bundle"), a.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"), a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.B"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"), a.e("shared~bundle.AccountAnalytics~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~"), a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatch~bundle."), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDiscovery~bundle.Birdwatch~bu"), a.e("shared~loader.DMDrawer~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.DirectMessages~bundl"), a.e("shared~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.Explore~bundle.LiveEvent~bundle.Home"), a.e("shared~loader.PushNotificationsPrompt~loader.MessageHandler~loader.promptHandler~bundle.Notifications"), a.e("shared~bundle.Notifications~ondemand.LeaveThisConversation"), a.e("bundle.Notifications")]).then(a.bind(a, 535850))), {
            shouldMigrateToX: !1
        }))
          , P = (0,
        m.Z)((0,
        M.p)((()=>Promise.all([a.e("modules.common"), a.e("modules.audio"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.R"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisAd~bundle.NotMyAc"), a.e("shared~loader.DashMenu~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisA"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.A"), a.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"), a.e("shared~loader.DashMenu~loader.directMessagesData~loader.SideNav~loader.Typeahead~loader.AppModules~loader.DMD"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Account~bundle.ReaderMode~bu"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Grok~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bun"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"), a.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDisco"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpace"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.AudioSpaceDetail~bundle"), a.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"), a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.B"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"), a.e("shared~bundle.AccountAnalytics~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~"), a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatch~bundle."), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDiscovery~bundle.Birdwatch~bu"), a.e("shared~loader.DMDrawer~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.DirectMessages~bundl"), a.e("shared~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.Explore~bundle.LiveEvent~bundle.Home"), a.e("shared~loader.PushNotificationsPrompt~loader.MessageHandler~loader.promptHandler~bundle.Notifications"), a.e("shared~bundle.Notifications~ondemand.LeaveThisConversation"), a.e("bundle.Notifications")]).then(a.bind(a, 727276))), {
            shouldMigrateToX: !1
        }))
          , I = (0,
        m.Z)((0,
        M.p)((()=>Promise.all([a.e("modules.common"), a.e("modules.audio"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.R"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisAd~bundle.NotMyAc"), a.e("shared~loader.DashMenu~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.NotFound~bundle.AboutThisA"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Grok~bundle.Account~bundle.A"), a.e("shared~loader.DMDrawer~bundle.AboutThisAd~bundle.NotMyAccount~bundle.MultiAccount~bundle.Articles~bundle.Audi"), a.e("shared~loader.DashMenu~loader.directMessagesData~loader.SideNav~loader.Typeahead~loader.AppModules~loader.DMD"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.AppModules~loader.DMDrawer~bundle.Account~bundle.ReaderMode~bu"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.Grok~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bun"), a.e("shared~loader.Typeahead~loader.DMDrawer~bundle.MultiAccount~bundle.ReaderMode~bundle.Articles~bundle.AudioSpa"), a.e("shared~loader.DashMenu~loader.DMDrawer~bundle.AccountAnalytics~bundle.ReaderMode~bundle.Articles~bundle.Audio"), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDisco"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpace"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"), a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.AudioSpaceDetail~bundle"), a.e("shared~loader.DMDrawer~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpaceba"), a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.B"), a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bundle.Displa"), a.e("shared~bundle.AccountAnalytics~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~"), a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatch~bundle."), a.e("shared~loader.DMDrawer~bundle.AccountAnalytics~bundle.Articles~bundle.AudioSpaceDiscovery~bundle.Birdwatch~bu"), a.e("shared~loader.DMDrawer~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.DirectMessages~bundl"), a.e("shared~bundle.Bookmarks~bundle.Communities~bundle.TwitterArticles~bundle.Explore~bundle.LiveEvent~bundle.Home"), a.e("shared~loader.PushNotificationsPrompt~loader.MessageHandler~loader.promptHandler~bundle.Notifications"), a.e("shared~bundle.Notifications~ondemand.LeaveThisConversation"), a.e("bundle.Notifications")]).then(a.bind(a, 723962))), {
            shouldMigrateToX: !1
        }))
          , x = {
            to: f._N,
            key: g,
            label: g,
            retainScrollPosition: !1
        }
          , L = {
            to: f.JV,
            key: _,
            label: _,
            retainScrollPosition: !1
        }
          , H = {
            to: f.JK,
            key: k,
            label: k,
            retainScrollPosition: !1
        }
          , F = {
            to: f.ag,
            key: E,
            label: E,
            retainScrollPosition: !1
        }
          , U = ()=>n.createElement(D.Z, {
            to: f._N
        })
          , V = e=>{
            const {featureSwitches: d} = n.useContext(p.rC)
              , {history: a, isLoggedInUserActiveCreator: r} = e
              , l = d.isTrue("responsive_web_subscribers_ntab_for_creators_enabled")
              , i = r && l
              , m = n.useMemo((()=>{
                const e = [x, H, L];
                return i && e.splice(2, 0, F),
                e
            }
            ), [i])
              , D = i ? I : U
              , M = n.createElement(t.Switch, null, n.createElement(t.Route, {
                component: Z,
                exact: !0,
                path: f._N
            }), n.createElement(t.Route, {
                component: B,
                exact: !0,
                path: f.JV
            }), n.createElement(t.Route, {
                component: P,
                exact: !0,
                path: f.JK
            }), n.createElement(t.Route, {
                component: D,
                exact: !0,
                path: f.ag
            }), n.createElement(t.Route, {
                component: U,
                exact: !0,
                path: f.Im
            }))
              , w = n.useMemo((()=>n.createElement(b.Z, {
                "aria-label": C,
                links: m
            })), [m]);
            return n.createElement(A.Z, null, n.createElement(c.Z, {
                documentTitle: v,
                history: a,
                primaryContent: (()=>{
                    const e = n.createElement(h.Z, {
                        history: a
                    });
                    return n.createElement(u.Z, {
                        component: o.Z,
                        fab: e
                    }, M)
                }
                )(),
                rightControl: N,
                secondaryBar: w,
                sidebarContent: n.createElement(s.Z, null),
                title: R
            }))
        }
          , G = T(V)
    }
    ,
    850755: (e,d,a)=>{
        a.d(d, {
            p: ()=>te
        });
        a(906886);
        var n = a(202784)
          , t = a(882392)
          , o = a(669263)
          , r = a(108352)
          , l = a(473228)
          , i = a.n(l)
          , s = a(325686)
          , u = a(125684)
          , c = a(973186)
          , b = a(101451)
          , p = a(845855)
          , h = a(460673);
        const A = a.p + "illustration_unmention_1200w.a6d67a6a.png"
          , m = a.p + "illustration_unmention_1800w.6250707a.png"
          , D = 600
          , M = 175
          , w = {
            image: {
                url: m,
                width: 1800,
                height: 525
            },
            customVariants: [{
                uri: a.p + "illustration_unmention_600w.b146e2ea.png",
                width: D,
                height: M
            }, {
                uri: A,
                width: 1200,
                height: 350
            }, {
                uri: m,
                width: 1800,
                height: 525
            }]
        };
        var y = a(147877);
        const S = "leave_this_conversation_inline_education"
          , T = i().j24c37b2
          , f = i().e839db3a
          , v = i().eba8b1c8
          , g = i().i859a9d4
          , _ = i().j745b8a6
          , k = ({onClose: e})=>n.createElement(p.nO, {
            namespace: {
                element: "leave_this_conversation_education_sheet"
            }
        }, n.createElement(y.Z, {
            actionLabel: T,
            onAction: e,
            onClose: e
        }))
          , E = c.default.create((e=>({
            footerLearnMoreLink: {
                whiteSpace: "nowrap"
            },
            wrapper: {
                borderBottomColor: e.colors.borderColor,
                borderBottomWidth: e.borderWidths.small
            }
        })))
          , C = e=>{
            const {onDismiss: d} = e
              , [a,o] = n.useState(!1)
              , r = (0,
            h.z)();
            n.useEffect((()=>{
                r.scribe({
                    element: S,
                    action: "impression"
                })
            }
            ), [r]);
            const l = [{
                text: f,
                onClick: ()=>{
                    r.scribe({
                        element: S,
                        action: "dismiss"
                    }),
                    d()
                }
            }];
            return n.createElement(n.Fragment, null, a && n.createElement(k, {
                onClose: ()=>{
                    o(!1)
                }
            }), n.createElement(s.Z, {
                style: E.wrapper
            }, n.createElement(u.Z, {
                headline: v,
                image: w.image,
                imageVariants: w.customVariants,
                rightControl: n.createElement(b.Z, {
                    feedbackItems: l,
                    isDisplayedOnMedia: !0
                }),
                subtext: n.createElement(n.Fragment, null, _, " ", n.createElement(t.ZP, {
                    color: "text",
                    onClick: ()=>{
                        o(!0)
                    }
                    ,
                    size: "subtext1",
                    style: E.footerLearnMoreLink,
                    weight: "bold",
                    withInteractiveStyling: !0,
                    withUnderline: !0
                }, g))
            })))
        }
        ;
        var N = a(348501)
          , R = a(963705)
          , Z = a(231372)
          , B = a(636374);
        a(571372);
        const P = Object.freeze({
            VerificationCheck: "VerificationCheck"
        })
          , I = Object.freeze({
            [P.VerificationCheck]: function(e) {
                if (3 !== e.length)
                    throw new Error("url list must be 3 urls for each variant (400x200, 800x400, 1200x600)");
                const [d,a,n] = e;
                return [{
                    width: 400,
                    height: 200,
                    uri: d
                }, {
                    width: 800,
                    height: 400,
                    uri: a
                }, {
                    width: 1200,
                    height: 600,
                    uri: n
                }]
            }(["https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png", "https://abs.twimg.com/responsive-web/client-web/verification-check-1200x600.v1.ef1651f9.png"])
        });
        var x = a(10034)
          , L = a(810286)
          , H = a(16587)
          , F = a(452612)
          , U = a(392160)
          , V = a(240615)
          , G = a(80045);
        const z = (0,
        H.Z)(((e,d)=>d && d.notificationsModule(e)));
        var O = a(539928)
          , j = a(376831)
          , W = a(572394)
          , K = a(637985);
        const $ = {
            ...(0,
            W.G)({
                tweetDismissable: !0,
                withMuteConversation: !0
            }),
            [F.ZP.Tweet]: O.ov({
                selectDisplayType: e=>e.content.displayType,
                handlers: {
                    [K.Z.Tweet]: (0,
                    j.Cw)({
                        withMuteConversation: !0,
                        withUnreadStyles: !0
                    }),
                    [K.Z.QuotedTweet]: (0,
                    j.$Q)({
                        isCondensed: !0
                    })
                }
            })
        }
          , J = i().eb75875e
          , Q = i().e9f1fbcc
          , X = i().j887d006
          , Y = i().c06d4306
          , q = n.createElement(i().I18NFormatMessage, {
            $i18n: "d39ad44d"
        }, n.createElement(t.ZP, {
            color: "text",
            link: (0,
            o.ju)("https://help.x.com/managing-your-account/about-twitter-verified-accounts"),
            weight: "bold",
            withUnderline: !0
        }, i().e3f9838d))
          , ee = i().ge7c661a
          , de = i().d3de3b5c;
        class ae extends n.Component {
            constructor(...e) {
                super(...e),
                this._getEmptyMessageBody = ()=>{
                    switch (this.props.notificationsType) {
                    case L.l.Mentions:
                        return Y;
                    case L.l.Verified:
                        return ee;
                    case L.l.Subscribers:
                        return de;
                    default:
                        return X
                    }
                }
                ,
                this._getEmptyMessageHeader = ()=>Q,
                this._renderTwitterBlueVerifiedEmptyState = ()=>n.createElement(r.Z, {
                    header: Q,
                    imageVariants: I.VerificationCheck,
                    message: q,
                    onButtonPress: this._handleEmptyTimelineButtonPress,
                    onImpression: this._handleEmptyTimelineImpression
                }),
                this._renderSubscribersEmptyState = ()=>n.createElement(r.Z, {
                    header: Q,
                    message: de,
                    onButtonPress: this._handleEmptyTimelineButtonPress,
                    onImpression: this._handleEmptyTimelineImpression
                }),
                this._renderEmptyTimeline = ()=>{
                    const {notificationsType: e} = this.props;
                    return e === L.l.Verified && this.context.featureSwitches.isTrue("responsive_web_twitter_blue_verified_badge_ntab_empty_state_enabled") ? this._renderTwitterBlueVerifiedEmptyState() : e === L.l.Subscribers ? this._renderSubscribersEmptyState() : n.createElement(r.Z, {
                        header: this._getEmptyMessageHeader(),
                        message: this._getEmptyMessageBody(),
                        onButtonPress: this._handleEmptyTimelineButtonPress,
                        onImpression: this._handleEmptyTimelineImpression
                    })
                }
                ,
                this._handleEmptyTimelineImpression = ()=>{
                    const {analytics: e} = this.props;
                    e.scribe({
                        component: "empty_message",
                        action: "impression"
                    })
                }
                ,
                this._handleEmptyTimelineButtonPress = ()=>{
                    const {analytics: e} = this.props;
                    e.scribe({
                        component: "empty_message",
                        element: "primary_cta",
                        action: "click"
                    })
                }
                ,
                this._handleAtTop = ()=>{
                    this._updateLastReadIfNeeded()
                }
                ,
                this._renderTimelineHeader = ()=>{
                    const {addLeaveThisConversationEducationFlag: e, notificationsType: d, shouldShowUnmentionEducation: a, timelineHasTweets: t} = this.props;
                    return a && d === L.l.Mentions && t && this.context.featureSwitches.isTrue("dont_mention_me_mentions_tab_education_enabled") ? n.createElement(C, {
                        onDismiss: e
                    }) : void 0
                }
            }
            componentDidMount() {
                const {notificationsType: e, setNotificationsType: d} = this.props;
                d(e)
            }
            componentWillUnmount() {
                const {markAllAsRead: e, notificationsType: d} = this.props;
                this._updateLastReadIfNeeded(),
                d === L.l.All && e()
            }
            render() {
                const {notificationsModule: e} = this.props;
                return e ? n.createElement(R.Z, null, n.createElement(Z.Z, {
                    entryConfiguration: $,
                    header: this._renderTimelineHeader(),
                    key: "notification-timeline",
                    module: e,
                    onAtTop: this._handleAtTop,
                    renderEmptyState: this._renderEmptyTimeline,
                    title: J
                })) : null
            }
            _updateLastReadIfNeeded() {
                const {notificationsType: e, unreadCount: d, updateLastRead: a} = this.props;
                d && a(e)
            }
        }
        ae.contextType = N.rC;
        const ne = e=>(0,
        x.C)((e=>{
            const d = (0,
            H.Z)(z);
            return (0,
            U.Z)().propsFromState((()=>({
                shouldShowUnmentionEducation: e=>(0,
                V.t5)(e, V.QV),
                unreadCount: (a,{history: n, ntabData: t})=>{
                    var o;
                    return null == (o = d(e, t)) ? void 0 : o.selectUnreadEntriesCount(a)
                }
                ,
                timelineHasTweets: (a,{history: n, ntabData: t})=>{
                    const o = d(e, t)
                      , r = null == o ? void 0 : o.selectEntries(a);
                    return !!(null == r ? void 0 : r.some((e=>e.type === F.ZP.Tweet)))
                }
            }))).adjustStateProps((({shouldShowUnmentionEducation: a, timelineHasTweets: n, unreadCount: t},{history: o, ntabData: r})=>({
                ntabData: null,
                notificationsModule: d(e, r),
                notificationsType: e,
                shouldShowUnmentionEducation: a,
                timelineHasTweets: n,
                unreadCount: t
            }))).propsFromActions((({history: a, ntabData: n})=>{
                var t;
                return {
                    addLeaveThisConversationEducationFlag: ()=>(0,
                    V.pj)(V.QV),
                    markAllAsRead: null == (t = d(e, n)) ? void 0 : t.markAllAsRead,
                    updateLastRead: n && n.updateLastSeenCursor,
                    setNotificationsType: G.BZ
                }
            }
            )).withAnalytics({
                page: "ntab",
                section: e
            })
        }
        )(e)(ae), {
            ntabData: B.Z
        })
          , te = ({notificationsType: e})=>ne(e)
    }
    ,
    723962: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>t
        });
        var n = a(810286);
        const t = (0,
        a(850755).p)({
            notificationsType: n.l.Subscribers
        })
    }
    ,
    727276: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>t
        });
        var n = a(810286);
        const t = (0,
        a(850755).p)({
            notificationsType: n.l.Verified
        })
    }
    ,
    529219: (e,d,a)=>{
        a.r(d),
        a.d(d, {
            default: ()=>i
        });
        var n = a(202784)
          , t = a(208543)
          , o = a(783427)
          , r = a(473569);
        const l = (e={})=>{
            const {direction: d} = (0,
            o.Z)();
            return (0,
            t.Z)("svg", {
                ...e,
                role: e["aria-label"] ? e.role || "img" : void 0,
                "aria-hidden": void 0 === e["aria-label"],
                style: [r.Z.root, e.style],
                viewBox: "0 0 24 24",
                children: n.createElement("g", null, n.createElement("path", {
                    d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z"
                }))
            }, {
                writingDirection: d
            })
        }
        ;
        l.metadata = {
            width: 24,
            height: 24
        };
        const i = l
    }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Notifications.01cc567a.js.map
